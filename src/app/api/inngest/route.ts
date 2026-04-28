import {serve} from "inngest/next";
import {inngest} from "../../../inngest/client"
import {codeAgentFunction} from "../../../inngest/functions"
//creating api key
export const {GET,POST,PUT} = serve({
    client:inngest,
    functions: [
        codeAgentFunction,
    ],
})
