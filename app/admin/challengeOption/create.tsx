import { BooleanInput, Create, Datagrid, List, NumberInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from "react-admin"


export const ChallengeOptionCreate = () => {
    return (
       <Create>
            <SimpleForm>
                <TextInput source="text" validate={[required()]}  label="Text" />
                <BooleanInput source="correct" label="Correct option" />
                <ReferenceInput source="lessonId" reference="lessons" />
                <NumberInput source="order" validate={[required()]} label="Order"/>
                <TextInput source="imageSrc" validate={[required()]}  label="Image URL" />
                <TextInput source="audioSrc" validate={[required()]}  label="Audio URL" />

            </SimpleForm>
        </Create>
    )
}