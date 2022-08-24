import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
        marginTop: 100,
    },

    Box: {
        margin: "2% 0",
        "&:hover": {
             borderBottom:"1px solid #0090BA"
         }
    },
 
 
    Box2: {
        margin: "0.6% 0",
        fontSize: 14
    },
    Box3: {
        margin: "1% 0",
        fontSize: 13,
        paddingBottom:"2%"
    },
    HeadBox: {
        fontWeight: "bolder",
        fontSize:14
    },
    Link: {
        textDecoration: "none",
        color: "#0090BA",
        fontSize: 13
    }
}))