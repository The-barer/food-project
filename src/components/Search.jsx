import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("");
    const handelKey = (event) => {
        if (event.key === "Enter") {
            handelSubmit();
        }
    };
    const handelChange = (event) => {
        setValue(event.target.value);
        cb(event.target.value);
    };

    const handelSubmit = () => {
        cb(value, "all");
    };
    const { search } = useLocation();

    useEffect(() => {
        setValue(search.split('=')[1]);
    }, [search]);

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type={"search"}
                    id="search-field"
                    placeholder="Search"
                    onKeyDown={handelKey}
                    onChange={handelChange}
                    value={value}
                />
                <button
                    className="btn"
                    style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                    }}
                    onClick={handelSubmit}
                >
                    Search
                </button>
            </div>
        </div>
    );
}
export { Search };
