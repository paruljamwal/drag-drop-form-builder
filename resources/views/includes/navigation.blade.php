<body class="app fb-app">
    <div id="global-loader">
        <img src="{{ asset('images/loader.svg') }}" class="loader-img" alt="">
    </div>

    <header class="fb-topnav" role="banner">
        <div class="fb-topnav__inner">
            <div class="fb-topnav__brand">
                <a href="{{ url('/') }}" class="fb-topnav__logo-link" aria-label="Edunet Foundation home">
                    <img
                        src="{{ asset('images/edunet-logo.svg') }}"
                        class="fb-topnav__logo"
                        alt="Edunet Foundation"
                        width="140"
                        height="46"
                    >
                </a>
                <span class="fb-topnav__divider" aria-hidden="true"></span>
                <span class="fb-topnav__product">Form Builder</span>
            </div>
            <div class="fb-topnav__actions">
                <span class="fb-topnav__user">Guest User</span>
            </div>
        </div>
    </header>

    <div class="fb-page">
