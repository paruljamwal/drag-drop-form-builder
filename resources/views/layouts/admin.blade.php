<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

	<meta name="csrf-token" content="{{ csrf_token() }}" />
	<meta charset="UTF-8">
	<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title>{{ $title }}</title>

	@include('includes.css')
	@stack('styles')
</head>

@include('includes.navigation')
@yield('content')

</div>

@include('includes.js')
@stack('scripts')

</body>
</html>
