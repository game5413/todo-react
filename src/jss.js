import { create as CreateJss } from "jss"
import JssVendorPrefixed from "jss-plugin-vendor-prefixer"
import JssNested from "jss-plugin-nested"
import jssCamelCase from "jss-plugin-camel-case"

const jss = CreateJss()
jss.use(
    JssVendorPrefixed(),
    JssNested(),
    jssCamelCase()
)

export default jss