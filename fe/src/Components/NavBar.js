
import React from 'react';
import { Button, ButtonGroup, Container } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = ({ handleNav, current }) => {

    const { isAuthenticated } = useAuth0();

    const pages = ["Home", "Test"];

    const buttons = pages.map((page) => {
        console.log(handleNav, current, page);

        const isDisabled = page.toLowerCase() === current || (current !== "home" && !isAuthenticated);

        return <Button disabled={isDisabled} onClick={() => handleNav(page)}>{page}</Button>;
    })

    return (
        <Container>
            <ButtonGroup orientation="vertical">
                { buttons }
            </ButtonGroup>
        </Container>
    )
}

export default NavBar;