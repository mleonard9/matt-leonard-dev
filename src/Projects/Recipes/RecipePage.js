import * as React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Wrapper = styled.div`

`

function RecipePage(props) {

  function closeRecipePage() {
    props.onCloseRecipePage(false);
  }

  return (
     <Wrapper>
        <Button variant="contained" onClick={closeRecipePage}>Go Back To Recipes</Button>
     </Wrapper>
  );
}

export default RecipePage;