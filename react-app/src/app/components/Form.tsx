import React from 'react'
import { FieldName, FieldValues, FormContextValues, NestDataObject, useForm, ValidationOptions } from 'react-hook-form'
import './style/Form.css'

interface FormProps {
    onSubmit: (data: Record<string, string | number | boolean | null>) => void;
    header: string;
    description: string;
    fieldsets: FieldsetProps[];
    name: string;
    submitText?: string;
}

export interface FieldsetProps {
    legend: string;
    fields: InputDataProps[];
}

interface InputDataProps {
    label: string;
    type?: string;
    id?: string;
    min?: string | number;
    max?: string | number;
    optional?: boolean;
    options?: string[];
    width?: string;
    placeholder?: string;
}

interface InputProps {
    label: string;
    register: { <Element>(validationOptions: ValidationOptions): (ref: (Element | null)) => void; <Element>(name: FieldName<FieldValues>, validationOptions?: ValidationOptions): void; <Element>(namesWithValidationOptions: Record<FieldName<FieldValues>, ValidationOptions>): void; <Element>(ref: Element, validationOptions?: ValidationOptions): void; <Element>(refOrValidationOptions: (ValidationOptions | Element | null), validationOptions?: ValidationOptions): (((ref: (Element | null)) => void) | void) };
    errors: NestDataObject<Record<string, string | null | undefined | never | number>>;
    type?: string;
    id?: string;
    min?: string | number;
    max?: string | number;
    optional?: boolean;
    options?: string[];
    width: string;
    placeholder?: string;
}

const camelCase = (string: string): string => string
    .replace(/\s(.)/g, a => a.toUpperCase())
    .replace(/^(.)/, b => b.toLowerCase())
    .replace(/\s+/g, '')

const InputLabel: React.FC<{ label: string; optional?: boolean; id: string; width: string }> = props =>
    <label htmlFor={ props.id } className={ props.width }>{ props.label }{ props.optional ? '' : '*' }{ props.children }</label>

export const Input: React.FC<InputProps> = props => {
    const id = camelCase(props.id || props.label)
    return <div className={ `${ props.type } ${ props.width }` }>
        <InputLabel label={ props.label } optional={ props.optional } id={ id } width={ props.width }>
            <br/>
            { props.type === 'textarea'
                ? <textarea
                    className={ props.width }
                    name={ id }
                    id={ id }
                    ref={ props.register({ required: !props.optional }) }
                    placeholder={ props.placeholder }
                />
                : (props.type == 'select' && props.options)
                    ? <select
                        className={ props.width }
                        name={ id }
                        id={ id }
                        ref={ props.register({ required: !props.optional }) }
                        defaultValue={ '' }
                    >
                        <option value='' defaultValue='' disabled/>
                        { props.options.map(option =>
                            <option key={ option } value={ option.toUpperCase() }>{ option }</option>) }
                    </select>
                    : <input
                        className={ props.width }
                        type={ props.type || 'text' }
                        name={ id }
                        id={ id }
                        ref={ props.register({ required: !props.optional }) }
                        min={ props.min }
                        max={ props.max }
                        placeholder={ props.placeholder }
                    /> }
        </InputLabel>
        { props.errors[props.label] && `${ props.label } is required` }
    </div>
}

const FormHeader: React.FC<{ header: string; description: string }> = props => <fieldset className='form header'>
    <h2>{ props.header }</h2>
    <br/>
    <br/>
    <p>{ props.description }</p>
</fieldset>

export const Form: React.FC<FormProps> = props => {
    const { register, handleSubmit, errors }: FormContextValues = useForm()
    return <>
        <FormHeader header={ props.header } description={ props.description }/>
        <form onSubmit={ handleSubmit(props.onSubmit) } id={ props.name } name={ props.name } className='form'>
            { props.fieldsets.map(set => <fieldset key={ set.legend }>
                <span><legend><h3>{ set.legend }</h3></legend></span>
                { set.fields.map(field => <Input
                    id={ field.id }
                    key={ field.label }
                    label={ field.label }
                    register={ register }
                    errors={ errors }
                    type={ field.type || 'text' }
                    optional={ field.optional }
                    options={ field.options }
                    width={ field.width || 'half' }
                    placeholder={ field.placeholder }
                />) }
            </fieldset>) }
            <input type='submit' className='submit' value={ props.submitText || 'Submit' }/>
        </form>
    </>
}
