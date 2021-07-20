import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


// bootstrap
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/Col'


export default function CorpusItem() {
    const [expanded, setExpanded] = React.useState(false);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    const handleChange = (event) => {
        console.log('test', event.target.name)
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (

                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={toggleChecked} />}
                        label="Normal"
                    />
                </FormGroup>

    );
}