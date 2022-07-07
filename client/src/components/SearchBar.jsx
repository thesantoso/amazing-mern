import { useContext } from "react";
import siteContext from "../siteContext";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    createTheme,
    FormControl,
    IconButton,
    OutlinedInput,
    ThemeProvider,
} from "@mui/material";

function SearchBar({ startSearch }) {
    const { searchKeywords, setSearchKeyword } = useContext(siteContext);

    function checkEnter(e) {
        if (e.code === "Enter") {
            startSearch();
        }
    }

    return (
        <FormControl fullWidth size="small" className="search-bar">
            <OutlinedInput
                type="text"
                color="searchBar"
                value={searchKeywords}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onKeyDown={(e) => {
                    checkEnter(e);
                }}
                inputProps={{
                    autoComplete: "off",
                }}
                endAdornment={
                    <IconButton
                        color="orangeIcon"
                        onClick={() => startSearch()}
                        edge="end">
                        <FontAwesomeIcon icon={faSearch} />
                    </IconButton>
                }
                placeholder="Search..."
            />
        </FormControl>
    );
}

export default SearchBar;
