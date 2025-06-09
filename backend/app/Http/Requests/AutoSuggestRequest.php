<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class AutoSuggestRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'query' => [
                'required',
                'string',
                'min:3',
                'max:50',
                'regex:/^[a-zA-Z\s]+$/'
            ]
        ];
    }

    public function messages()
    {
        return [
            'query.required' => 'The query parameter is required.',
            'query.min' => 'The query must be at least 3 characters.',
            'query.max' => 'The query must not exceed 50 characters.',
            'query.regex' => 'The query may only contain letters and spaces',
        ];
    }

    /**
     * Determine if the request expects a JSON response.
     */
    public function expectsJson(): bool
    {
        return true;
    }

    /**
     * Handle a failed validation attempt.
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'error' => 'Validation failed',
            'message' => 'The given data was invalid.',
            'errors' => $validator->errors()
        ], 422));
    }
}