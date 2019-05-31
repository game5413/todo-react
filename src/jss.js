import { create as CreateJss } from "jss"
import JssVendorPrefixed from "jss-plugin-vendor-prefixer"
import JssNested from "jss-plugin-nested"

const jss = CreateJss()
jss.use(
    JssVendorPrefixed(),
    JssNested()
)

export default jss