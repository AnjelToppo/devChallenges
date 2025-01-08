let urlIptEl = document.querySelector('.url-input');

let qrCodeBtnEl = document.querySelector('.qr-code-btn');
let copyBtnEl = document.querySelector('.copy-btn');

let copyBtnTextEl = document.querySelector('.copy-btn-text');

let downloadLinkEl = document.querySelector('.download-link');

let urlContainerEl = document.querySelector('.url-container');
let qrCodeContainerEl = document.querySelector('.qr-code-container');
let btnContainerEl = document.querySelector('.btn-container');

let logoImgEl = document.querySelector('.logo-image');

let url;

qrCodeBtnEl.addEventListener('click', () => {
    urlContainerEl.remove();
    logoImgEl.style.marginTop = '4.2rem';
    logoImgEl.style.marginBottom = '11.2rem';

    qrCodeContainerEl.style.display = 'block';
    btnContainerEl.style.display = 'flex';

    url = urlIptEl.value;
    urlIptEl.value = '';
    new QRCode(document.getElementById("qrcode"),
        {
            text: url,
            height: 200,
            width: 200,
            colorLight: '#FAFAF9'
        });

    let qrCodeImg = document.querySelectorAll('img')[1];

    qrCodeImg.onload = () => {
        let vp = document.getElementById('viewortMeta').getAttribute('content');
        document.getElementById('viewortMeta').setAttribute('content', 'width=800');

        html2canvas(document.querySelector("#qrcode"), {
            allowTaint: true
        }).then(canvas => {
            downloadLinkEl.href = canvas.toDataURL('image/png');
        }).then(function () {
            document.getElementById('viewortMeta').setAttribute('content', vp)
        });
    }
})

copyBtnEl.addEventListener('click', async () => {
    await navigator.clipboard.writeText(url);
    copyBtnTextEl.innerHTML = "Copied"
})



