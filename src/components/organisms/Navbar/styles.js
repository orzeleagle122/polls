import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => (
    {
        navbarWrapper: {
            color: "#e3e3e3",
            height: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
            background: "#233142",
        },
        gridmenu: {
            gap: "15px",
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
        },
        webtitle: {
            width: "100%",
        },
        button: {
            background: "#455d7a",
            color: "#e3e3e3",
            "&:hover": {
                background: "#f95959",
            }
        }
    }
))