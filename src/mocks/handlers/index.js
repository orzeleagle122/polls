import {rest} from "msw";
import {polls} from "../data/polls";

export const handlers = [
    rest.get('/getUserPolls', (req, res, context) => {
        return res(context.status(200), context.json({polls: polls}))
    })

];