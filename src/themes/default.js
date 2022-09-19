import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme ({
    colors:{
        brand:{
            600: "#262A41",
            500: "#cccccc",
            400: "#E4E4E4",
        }
    },
    fonts:{
        body:
        `'Poppins',sans-serif`,
    },
}
)

export default theme;