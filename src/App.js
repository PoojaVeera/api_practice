import React, { useState } from "react";

//styled components
import * as Style from "./bankDetails.styles";
import * as S from "./bcoFlow.styles";

//sweet alert
import Swal from "sweetalert2";
//kendo-features
import { Button } from "@progress/kendo-react-buttons";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { Hint, Label } from "@progress/kendo-react-labels";
import { Input, RadioGroup } from "@progress/kendo-react-inputs";

//components
import { NumericTextBox } from "@progress/kendo-react-inputs";

const App = () => {
  const handleSave = () => {
    Swal.fire("Bank details saved successfully", "", "success");
  };

  return (
    <Style.BankContainer>
      <Button themeColor={"primary"} onClick={handleSave}>
        Save
      </Button>
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <NumericTextBox
            requirementIcon
            name="chequesOnHand"
            label="Security Post dated cheques on hand"
          />
          <Hint id="chequesOnHand">No of post dated cheques in hand</Hint>
        </div>
        <div>
          <Label>
            Name of the Account Holder <span className="text-red">&nbsp;*</span>
          </Label>
          <Input placeholder="Enter Account holder Name" name="AccHolderName" />
        </div>
        <div>
          <Label>
            Name of the Bank <span className="text-red">&nbsp;*</span>
          </Label>
          <ComboBox />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <Label>
            Branch<span className="text-red">&nbsp;*</span>
          </Label>
          <ComboBox />
        </div>
        <div>
          <Label>
            Date of Opening<span className="text-red">&nbsp;*</span>
          </Label>
          <Input />
        </div>
        <div>
          <Label>
            Account Number<span className="text-red">&nbsp;*</span>
          </Label>
          <Input name="accountNumber" maxLength={18} minLength={9} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <Label>
            Re enter Account Number<span className="text-red">&nbsp;*</span>
          </Label>
          <Input name="re-enterNumber" maxLength={18} minLength={9} />
        </div>
        <div>
          <Label>
            Account Type<span className="text-red">&nbsp;*</span>
          </Label>
          <ComboBox />
        </div>
        <div>
          <NumericTextBox
            requirementIcon
            name="noOfChequeReturns"
            label="No of cheque Returns"
          />
        </div>
      </div>
    </Style.BankContainer>
  );
};

export default App;
