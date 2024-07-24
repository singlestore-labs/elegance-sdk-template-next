'use client';

export function SessionButton() {
    const saveSession = () => {
        let domain = ".singlestore.com";
        let redirectUrl = "https://portal.singlestore.com";
        let currentDate = new Date();
        let expirationTime = currentDate.getTime() + 12 * 60 * 60 * 1000;
        let expirationDate = new Date(expirationTime);
        let expires = `expires=${expirationDate.toUTCString()}`;

        document.cookie = `shellId=${process.env.WORKSPACE_ID}; ${expires};  domain=${domain}; path=/`;
        window.open(redirectUrl);
    };
    return (
        <button
            className="hover:bg-s2-link hover:border-s2-link inline-flex items-center justify-center rounded border border-white px-4 py-1 text-center transition-all"
            onClick={saveSession}
        >
            Try Free
            <span className="inline-block ml-2 text-3xl leading-none pb-1">&rsaquo;</span>
        </button>
    )
}

