import React from 'react'
import cx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { FullscreenExitTwoTone } from '@material-ui/icons';


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
    }),
);


export const AboutCard = React.memo(function ProjectCard() {
    const styles = useN03TextInfoContentStyles();
    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();

    return (
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
            <BrandCardHeader image={'headers/about.png'} extra={'About'} />
            <CardContent className={cardStyles.content}>
                <TextInfoContent classes={styles} />
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt ligula eget elit aliquet imperdiet. Nunc eget bibendum nisi. Nullam lacinia quam et lectus dictum hendrerit. Vestibulum luctus leo neque. Duis hendrerit gravida urna quis vulputate. Pellentesque maximus suscipit libero ac elementum. Nulla venenatis odio at purus rhoncus vestibulum.</p>
                                <p>Sed semper, arcu et congue aliquam, tortor justo luctus neque, sit amet hendrerit arcu leo maximus enim. Integer commodo ut nulla malesuada ultrices. Donec est magna, finibus vel elit vel, pharetra euismod nulla. Nam sem ligula, ultrices sed maximus eget, fermentum non nulla. Vestibulum auctor arcu et eros mollis, ut condimentum nibh vestibulum. Vivamus et urna eget augue semper ultricies. Aenean a justo at urna tempor rhoncus et eget leo.</p>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras venenatis vitae augue non sollicitudin. Praesent turpis purus, vestibulum eu tincidunt sed, sollicitudin porttitor diam. Mauris id nunc sem. Donec in urna nec leo sollicitudin interdum id et ligula. Sed vitae euismod tortor, sit amet interdum augue. Sed tincidunt leo in purus laoreet, a scelerisque erat dapibus. Curabitur eu rhoncus arcu. Aliquam id convallis tortor, et iaculis ipsum. Nulla id dui eu neque blandit sagittis ut ac ante.</p>
                                <p>Cras enim dolor, efficitur id malesuada non, bibendum aliquam risus. Pellentesque auctor, quam vitae lobortis auctor, purus erat maximus augue, sit amet scelerisque felis nisl nec est. Curabitur id ipsum magna. Vestibulum tincidunt nibh sit amet turpis pharetra gravida. Nullam non viverra tellus, sit amet gravida orci. Vestibulum vel lacus accumsan, tristique ligula ac, fringilla ex. Donec eu velit eget magna interdum consequat. Fusce hendrerit metus sem, at gravida augue malesuada in. Vestibulum quis rhoncus tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse hendrerit ut velit ut molestie. Pellentesque eu blandit felis, at aliquam est. Sed dignissim at ipsum at molestie. Morbi tincidunt tincidunt tellus id sodales. Duis vel justo feugiat, sollicitudin metus vel, laoreet mauris.</p>
                                <p>Donec iaculis felis eget turpis sollicitudin ultricies. Pellentesque auctor pulvinar libero, vitae congue nibh convallis vel. Maecenas bibendum massa at tristique fermentum. Duis venenatis leo eget dui viverra efficitur. Fusce dictum mi et massa vestibulum, in porttitor elit consequat. Fusce quis scelerisque mi. Donec eget aliquam nunc. Suspendisse pulvinar at lorem at gravida. Etiam ante nibh, tempor at faucibus sit amet, gravida ut odio. Maecenas a elit suscipit, dapibus felis ac, rhoncus ante. Sed varius velit in leo dignissim, vel posuere diam rutrum. In finibus enim sit amet malesuada feugiat.</p>
                            </Grid>
                            <Grid>
                                <ul style={{ display: "table", width: "90%", tableLayout: "fixed", paddingTop: "14px" }}>
                                    <li style={{ display: "table-cell", width: "auto", textAlign: "center" }}><a href="https://github.com/motoroboto" target="_blank" style={{ color: "#298F85", fontWeight: "bold" }}>Robert Cullen-Keel</a></li>
                                    <li style={{ display: "table-cell", width: "auto", textAlign: "center" }}><a href="https://github.com/johndexteriv" target="_blank" style={{ color: "#298F85", fontWeight: "bold" }}>Dexter Garner</a></li>
                                    <li style={{ display: "table-cell", width: "auto", textAlign: "center" }}><a href="https://github.com/bpgould" target="_blank" style={{ color: "#298F85", fontWeight: "bold" }}>Bennett Gould</a></li>
                                    <li style={{ display: "table-cell", width: "auto", textAlign: "center" }}><a href="https://github.com/TRNisbet" target="_blank" style={{ color: "#298F85", fontWeight: "bold" }}>Tom Nisbet</a></li>
                                    <li style={{ display: "table-cell", width: "auto", textAlign: "center" }}><a href="https://github.com/reedtlr" target="_blank" style={{ color: "#298F85", fontWeight: "bold" }}>Reed Taylor</a></li>
                                    <li style={{ display: "table-cell", width: "auto", textAlign: "center" }}><a href="https://github.com/tutchings" target="_blank" style={{ color: "#298F85", fontWeight: "bold" }}>Thomas Tutchings</a></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card >
    );
});

export default AboutCard