// const { useState } = require("react")
import Numpad from "./Numpad";

const Dashboard = () => {
    // const [numValue,setNumValue] = useState<number | null>(null);

    return (
        <>
            <div>
                <h1>KrishiMitra</h1>
                <Numpad />
            </div>
        </>
    )
}
export {Dashboard}