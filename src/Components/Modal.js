import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { connect } from "react-redux"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function Modals(props) {
    const classes = useStyles();
    const open = props.opens;
    const [value, setValue] = React.useState('one');

    function handleChange(e, newValue) {
        setValue(newValue);
    }

    function handleClose() {
        props.dispatch({ type: "CLOSE_MODAL", name: props.nam })
    }
    function TabContainer(props) {
        return (
            <Typography component="div" style={{ padding: 8 * 3 }}>
                {props.children}
            </Typography>
        );
    }

    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab value="one" label="Configuration" wrapped />
                            <Tab value="two" label="Preview" />
                            <Tab value="three" label="Code" />

                        </Tabs>
                        <Button color="inherit" style={{ marginLeft: 600 }} onClick={handleClose}>
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>
                {value === 'one' && <TabContainer>{props.config}</TabContainer>}
                {value === 'two' && <TabContainer>{props.preview}</TabContainer>}
                {value === 'three' && <TabContainer>
                    <center>
                        {props.coded}
                    </center>
                </TabContainer>}
            </Dialog>
        </div>


    );
}

export default connect()(Modals)