const discount = document.getElementById('coupon_code');
const payment_btn = document.querySelector('.hc-payment');
const trash_btn = document.querySelectorAll('.hc-trash');

payment_btn.addEventListener('click', function (event) {
    console.log('折價卷代碼:', discount.value);
});


const shopComfirm = document.querySelector('.confirm-btn');

shopComfirm.addEventListener('click', function () {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: '確認結帳?',
        text: "無法回頭取消這筆訂單",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '是的',
        cancelButtonText: '取消',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                '成功!',
                '謝謝本次的購買',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                '取消',
                '我們將取消這筆資料',
                'error'
            )
        }
        if (result.isConfirmed == true) {
            window.location.href = "shoppingCart_finish_page.html";
        }
    })

});
