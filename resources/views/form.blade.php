@extends('layouts.admin')

@push('styles')
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="{{ asset('css/form-builder.css') }}" rel="stylesheet">
@endpush

@push('scripts')
    <script src="{{ asset('js/form-builder.js') }}" defer></script>
@endpush

@section('content')
    <div class="form-builder form-builder-shell">
        <x-form-builder.field-templates />
        <x-form-builder.header :submission-url="url('/forms/submit')" />

        <div class="form-builder-container">
            <div class="form-builder-workspace">
                <div class="form-builder-workspace__canvas">
                    <x-form-builder.canvas />
                </div>
                <x-form-builder.palette />
            </div>

            <x-form-builder.footer />
        </div>
    </div>

    <x-form-builder.schema-modal />
    <x-form-builder.delete-field-modal />
@endsection
