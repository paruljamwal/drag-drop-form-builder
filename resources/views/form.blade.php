@extends('layouts.admin')

@push('styles')
    <link href="{{ asset('css/form-builder.css') }}" rel="stylesheet">
@endpush

@push('scripts')
    <script src="{{ asset('js/form-builder.js') }}" defer></script>
@endpush

@section('content')
<div class="app-content">
    <div class="side-app !p-0">
        <div class="form-builder flex min-h-[calc(100vh-180px)] flex-col bg-gray-100">
            <x-form-builder.header :submission-url="url('/forms/submit')" />

            <main class="flex flex-1 flex-col gap-6 p-6 lg:flex-row">
                <x-form-builder.canvas />
                <x-form-builder.palette />
            </main>

            <x-form-builder.footer />
        </div>
    </div>
</div>
@endsection
