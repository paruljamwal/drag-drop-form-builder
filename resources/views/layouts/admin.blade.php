<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
	{{-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> --}}
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>


	<!-- Meta data -->
	<meta name="csrf-token" content="{{ csrf_token() }}" />

	<meta charset="UTF-8">
	<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!-- Favicon -->

	<!-- Title -->
	<title>{{$title}}</title>

	@include('includes.css')
	@stack('styles')
<style>
.app-content .side-app {
    padding: 20px 30px 0 30px !important;
}

/* ── Edunet brand bar (sidebar + header) ── */
.app-brand-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 4.25rem;
    padding: 0.875rem 1rem;
    background-color: #ffffff;
    border-bottom: 1px solid #e2e8f0;
    box-shadow: 0 1px 0 rgba(15, 23, 42, 0.04);
}

.app-brand-bar__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-decoration: none;
}

.app-brand-logo {
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
    object-fit: contain;
}

.app-brand-logo--sidebar {
    height: 2.125rem;
    max-width: 10rem;
}

.app-header1 .header-brand {
    display: flex;
    align-items: center;
    margin-right: 0.25rem;
}

.app-brand-logo--header {
    height: 1.5rem;
    max-width: 7.5rem;
}

/* Collapsed sidebar: show compact logo mark */
.sidenav-toggled .app-brand-bar {
    padding: 0.75rem 0.5rem;
}

.sidenav-toggled .app-brand-logo--sidebar {
    height: 1.5rem;
    max-width: 2.75rem;
    object-fit: cover;
    object-position: left center;
}

@media (min-width: 992px) {
    .app-header1.header .header-brand {
        display: none;
    }
}
</style>
</head>


@include('includes.navigation')
@yield('content')

<!--Footer-->
<footer class="footer">
	<div class="container">
		<div class="row align-items-center flex-row-reverse">
					<div class="col-lg-12 col-sm-12 mt-3 mt-lg-0 text-center">
				Copyright © {{date('Y')}} <a href="javascript:void(0)" class="fs-14 text-primary">LMS</a>.
				All rights reserved. 
			</div>
		</div>
	</div>
</footer>
<!--/Footer-->
</div>

<!-- Back to top -->
<a href="#top" id="back-to-top"><i class="fa fa-long-arrow-up"></i></a>

@include('includes.js')
@stack('scripts')

</body>

</html>