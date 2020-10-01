import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export function Details() {
    const [value, setValue] = React.useState(2);

    return(
        <div className="detailsContainer">
        <div className="row">
        <img src="/unnamed.png" alt="profile-picture" />
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Vote for me:</Typography>
            <Rating
                size="large"
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
      </Box>
      <div>Phone: 08456487646</div>
      <button>Send a message</button>
        </div>
        </div>
        <div className="info">
        Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
        </div>

        <textarea cols="40" rows="5"></textarea>
        <button>Send comment</button>
        <div className="comments">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo
        </div>
        <div className="comments">
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo
        </div>
        <div className="comments">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.  it to make a type specimen boo
        </div>
        <div className="comments">
        m Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo
        </div>
        </div>
    )
}