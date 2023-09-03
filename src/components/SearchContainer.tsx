import { FunctionComponent, useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./SearchContainer.css";
const SearchContainer: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="search-section">
        <div className="search-container">
          <div className="title">
            <div className="lets-explore">{`Let’s explore & travel the world`}</div>
            <div className="find-the-best">
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <div className="search-form">
            <div className="inputs-row">
              <div className="input-group">
                <Autocomplete
                  className="departure-field"
                  disablePortal
                  options={[
                    "Singapore (SIN)",
                    "Sydney (SYD)",
                    "Siem Reap (REP)",
                    "Shanghai (PVG)Sanya (SYX)",
                  ]}
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Departure"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue="Singapore -  Changi (SIN)"
                  size="medium"
                />
              </div>
              <div className="input-group">
                <div className="arrival-field">
                  <div className="input2">
                    <div className="label-container">
                      <div className="arrival">Arrival</div>
                    </div>
                    <div className="active">
                      <div className="muiautocompletetag">
                        <div className="chip">
                          <div className="container">
                            <div className="avatar">
                              <div className="op">F</div>
                            </div>
                            <div className="typography">
                              <div className="chip1">Chip</div>
                            </div>
                            <img
                              className="cancel-icon"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="chip">
                          <div className="container">
                            <div className="avatar">
                              <div className="op">F</div>
                            </div>
                            <div className="typography">
                              <div className="chip1">Chip</div>
                            </div>
                            <img
                              className="cancel-icon"
                              alt=""
                              src="/cancel1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="los-angeles-la">Los Angeles (LA)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-group">
                <div className="departure-field">
                  <DatePicker
                    label="Date"
                    value={dateFieldDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setDateFieldDateTimePickerValue(newValue);
                    }}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        size: "medium",
                        fullWidth: true,
                        color: "primary",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="button-group">
              <button className="search-flights-button">
                <div className="button2">Search flights</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchContainer;
