
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`
<!DOCTYPE html>
<body>
  <div class="field">
    <div class="control">
      <input id="test" class="input" type="text" required>
    </div>
  </div>
</body>
</html>`)
const document = dom.window.document;


import { FormtValidation } from "../../lib/FormValidation";

describe("RequiredValidator",function() {

    it("should validate input field", function() {
        var field = document.getElementById("test");
        var parent = field.parentElement;

        var validator = new FormtValidation();

        expect(validator.validateElement(field)).toEqual(false);
        expect(field.classList.contains("is-danger")).toEqual(true);
        expect(parent.parentElement.innerHTML).toMatch(/NOT VALID/);
      });
})