import React, { useState, useEffect } from 'react'
import cx from 'clsx';
import awsConfig from '../../aws-exports';
import Amplify, { Storage } from 'aws-amplify'
const { v4: uuidv4 } = require('uuid');
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import LinearProgress from '@material-ui/core/LinearProgress';
import Modal from '@material-ui/core/Modal'

const axios = require('axios')
Amplify.configure(awsConfig)

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            borderRadius: 0,
            borderBottom: "2px solid #f4a261"

        },
        content: {
            padding: 24,
        },
        progressBarDiv: {
            width: '100%',
            height: '6px',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
            backgroundColor: '#2a9d8f'
        },
        progressBar: {
            margin: '1px',
            variant: 'buffer',
            valueBuffer: 10,
            height: '4px',
            backgroundColor: '#264653',
        }
    }),
);


export const Uploader = React.memo(function ProjectCard() {
    const styles = useN03TextInfoContentStyles();
    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();
    const [userInputData, setUserInputData] = useState<userData>(Object)
    const [name, setName] = useState('')
    const [videoSrc, setVideoSrc] = useState('')
    const [file, setFile] = useState({ type: '', name: '' })
    const [response, setResponse] = useState('')
    const [isUploading, setIsUploading] = useState(null)

    type userData = {
        name: string,
        description: string,
        date: string,
        region: string
        url: string 
    }

    const onChange = (vidUpload) => {
        vidUpload.preventDefault()
        if (vidUpload.target.files[0] !== null) {
            setFile(vidUpload.target.files[0])
            setName(vidUpload.target.files[0].name)
        }
    }

    const handleUserInputData = (event) => {
        
        const {name, value} = event.target;
        setUserInputData({
            ...userInputData,
            [name]: value,
        })
    }

    const onSubmit = (vidUpload) => {
        vidUpload.preventDefault()
        if (file) {
            setIsUploading("anything")
            const s3Bucket = "https://rckeeluploadvideobuckettest1113114-dev.s3.amazonaws.com/"
            const randomID = uuidv4()
            const randomName = `${randomID}${file.type}`
            const name = randomName.replace("video/", ".")
            const videoURL = `${s3Bucket}${name}`
            console.log('file:', videoURL)
            const s3URL  = 'rckeeluploadvideobuckettest1113114-dev/public/' + videoURL;
            setUserInputData({...userInputData, url: s3URL})
            Storage.put(name, file, {
                /* level: 'protected', */
                contentType: file.type,
            })
            .then((result) => {
                setIsUploading(null)
                console.log('name:', name)
                setResponse(`Success uploading file: ${name}!`)
                // isUploading = false
                console.log('User Inputted Data w/ s3url', userInputData)
            })
            axios({
                method: "post",
                url: "https://ulsg7ghjha.execute-api.us-east-1.amazonaws.com/dev/api/addvideo",
                data: userInputData,
            }).then((res) => {
                if (res.status === 200) {
                    console.log('video data submitted')
                } else {
                    console.log('video data not submitted')
                }
            })
                .then(() => {
                    const inputValue = (document.getElementById('file-input') as HTMLInputElement).value = null
                    setFile(null)
                })
                .catch((err) => {
                    console.log(err)
                    setResponse(`Can't upload file: ${err}`)
                })
        } else {
            setResponse(`Files needed!`)
        }
    }
    // console.log('outside completed how much?', this.state.completed)
    useEffect(() => {
        if (file?.name) {
            setVideoSrc(URL.createObjectURL(file))
        }
    }, [file])


    return (
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader image={'headers/upload.png'} extra={'Upload'} />
            <CardContent className={cardStyles.content}>
                <TextInfoContent classes={styles} />
                <form onSubmit={(e) => onSubmit(e)}>

                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                                    <FormGroup>
                                        <TextField
                                            id="outlined-search"
                                            label="Video Name"
                                            variant="outlined"
                                            name="name"
                                            value={userInputData?.name || ""}
                                            onChange={(e) => handleUserInputData(e)}
                                        />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormGroup>
                                        <TextField
                                            id="outlined-search"
                                            label="Video Date"
                                            variant="outlined"
                                            name="date"
                                            value={userInputData?.date || ""}
                                            onChange={(e) => handleUserInputData(e)}
                                        />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormGroup>
                                        <TextField
                                            id="outlined-search"
                                            label="Video Region"
                                            variant="outlined"
                                            name="region"
                                            value={userInputData?.region || ""}
                                            onChange={(e) => handleUserInputData(e)}
                                        />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={7}>
                                    <FormGroup>
                                        <TextField
                                            id="outlined-search"
                                            label="Description"
                                            variant="outlined"
                                            name="description"
                                            value={userInputData?.description || ""}
                                            onChange={(e) => handleUserInputData(e)}
                                        />
                                    </FormGroup>
                                </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs style={{ marginLeft: "3vw" }} className='video-uploader'>
                            {file ? (<video src={videoSrc} width="400px" />) :
                                (<p></p>)}
                        </Grid>
                        <Grid>
                            <Grid>

                                

                                <label className='video-input'>
                                    <input
                                        style={{ display: 'none' }}
                                        type="file"
                                        id='file-input'
                                        accept='video/*'
                                        onChange={(vidUpload) => onChange(vidUpload)}
                                    />
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        component="span"
                                        style={{ marginRight: "2vw", marginBottom: "2vh", backgroundColor: "#E76F51", color: "white" }}
                                        startIcon={<ImageSearchIcon />}
                                    >
                                        Choose Video
                                    </Button>
                                </label>
                                <Button
                                    type='submit'
                                    className='btn'
                                    variant="contained"
                                    color="primary"
                                    style={{ marginLeft: "2vw", marginBottom: "2vh", backgroundColor: "#E76F51", color: "white" }}
                                    startIcon={<CloudUploadIcon />}
                                >     Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
                <Grid style={{ padding: "30px" }}>
                    {isUploading != null ? (<div className={cardStyles.progressBarDiv} >
                        <LinearProgress className={cardStyles.progressBar} />
                    </div>) : (<p></p>)}
                    {response && (
                        <div id='upload-status' className='upload-status'>
                            {response}
                        </div>
                    )}
                </Grid>
            </CardContent>
        </Card >
    );
});

export default Uploader