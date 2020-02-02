import React from 'react'
import { FormContextValues, useForm } from 'react-hook-form'
import './style/Form.css'

interface FormProps {
    onSubmit: (data: any) => void;
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
}

interface InputProps {
    label: string;
    register: any;
    errors: any;
    type?: string;
    id?: string;
    min?: string | number;
    max?: string | number;
    optional?: boolean;
    options?: string[];
}

const camelCase = (string: string): string => string
    .replace(/\s(.)/g, a => a.toUpperCase())
    .replace(/^(.)/, b => b.toLowerCase())
    .replace(/\s+/g, '')

const InputLabel: React.FC<{ label: string; optional?: boolean; id: string }> = props =>
    <label htmlFor={ props.id }>{ props.label }{ props.optional ? '' : '*' }{ props.children }</label>

export const Input: React.FC<InputProps> = props => {
    const id = camelCase(props.id || props.label)
    return <div className={ props.type }>
        <InputLabel label={ props.label } optional={ props.optional } id={ id }>
            <br/>
            { props.type === 'textarea'
                ? <textarea
                    name={ id }
                    id={ id }
                    ref={ props.register({ required: !props.optional }) }
                />
                : (props.type == 'select' && props.options)
                    ? <select
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
                        type={ props.type || 'text' }
                        name={ id }
                        id={ id }
                        ref={ props.register({ required: !props.optional }) }
                        min={ props.min }
                        max={ props.max }
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
        <form onSubmit={ handleSubmit(props.onSubmit) } name={ props.name } className='form'>
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
                />) }
            </fieldset>) }
            <input type='submit' className='submit' value={ props.submitText || 'Submit' }/>
        </form>
    </>
}
