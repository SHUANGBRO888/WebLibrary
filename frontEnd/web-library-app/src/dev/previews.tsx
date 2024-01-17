import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {BookCheckOutPage} from "../Layout/BookCheckOutPage/BookCheckOutPage";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/BookCheckOutPage">
                <BookCheckOutPage/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;