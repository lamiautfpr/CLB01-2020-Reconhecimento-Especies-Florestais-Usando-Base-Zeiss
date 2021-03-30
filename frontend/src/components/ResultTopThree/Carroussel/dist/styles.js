"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.DataURL = exports.Content = exports.Container = exports.BoxData = void 0;
var styled_components_1 = require("styled-components");
exports.BoxData = styled_components_1["default"].div.attrs({
    className: 'boxdata'
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  overflow: hidden;\n  transition: 0.5s;\n  height: 109px;\n  margin: 0 7%;\n  width: 85%;\n  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);\n  background-size: 390px;\n  background-position: center;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  padding: 5px;\n\n  span {\n    font-family: Raleway;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 13.43px;\n    margin-left: 10px;\n    line-height: 33px;\n    color: #FFFFFF;\n    background-color: rgba(124,148,61,0.7);\n    margin-top: 100px;\n    border-radius: 5px;\n    padding: 5px;\n  }\n"], ["\n  flex: 1;\n  overflow: hidden;\n  transition: 0.5s;\n  height: 109px;\n  margin: 0 7%;\n  width: 85%;\n  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);\n  background-size: 390px;\n  background-position: center;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  padding: 5px;\n\n  span {\n    font-family: Raleway;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 13.43px;\n    margin-left: 10px;\n    line-height: 33px;\n    color: #FFFFFF;\n    background-color: rgba(124,148,61,0.7);\n    margin-top: 100px;\n    border-radius: 5px;\n    padding: 5px;\n  }\n"])), function (props) { return props.url; });
exports.Container = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 80%;\n"], ["\n  width: 100%;\n  height: 80%;\n"])));
exports.Content = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 362.5px;\n  display: flex;\n  flex-direction: column;\n\n  ", ":hover {\n    flex: 1 1 70%;\n  }\n"], ["\n  width: 100%;\n  height: 362.5px;\n  display: flex;\n  flex-direction: column;\n\n  ", ":hover {\n    flex: 1 1 70%;\n  }\n"])), exports.BoxData);
exports.DataURL = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  height: 10px;\n"], ["\n  width: 100%;\n  height: 10px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
