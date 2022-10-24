$(function () {
    let validate = {
        init: function (param) {
            this.handleEvent()
            this.validate()
          },
          handleEvent: function () {
            let _this = this
      
            // Ngăn sự kiện nổi bọt của input
            $('.banner-submit-form').click(function (e) {
              e.stopPropagation();
            })
      
            $('.upload-file-input').click(function (e) { 
              e.stopPropagation();
            });
      
            $('.header-search-Bar button').click(function (e) {
              e.stopPropagation();
            })
      
            // Ngăn sự kiện nổi bọt của Modal Form
            $('.book-ticket .selection-button').click(function (e) {
              e.stopPropagation();
            })
      
            $('.request-wrap .request-checkbox').click(function (e) { 
              e.stopPropagation();
            });
      
            // Ngăn ko cho reload page khi click vào icon search và in ra value đc nhập
            $(document).on('submit', '.header-search-Bar', function (e) {
              let $this = $(this)
              let $input = $this.find('input')
      
              e.preventDefault();
              console.log(`Value được nhập: ${$input.val()}`)
              console.log('-------------')
            })
      
            // Ngăn sự kiện load lại trang của check product và console.log thông tin vé
            $(document).on('submit', '#check-product-form', function(e) {
              e.preventDefault();
              _this.showProductInfo()
            });
      
            // Ngăn sự kiện load lại trang của form 1 chiều và console.log thông tin vé
            $(document).on('submit', '#one-way-validator', function(e) {
              let $this = $(this)
              e.preventDefault();
              _this.showBannerTicketInfo()
             });
      
             // Ngăn reload page và show ra thông tin vé khứ hồi
             $(document).on('submit', '#round-trip-validator', function(e) {
              e.preventDefault();
              _this.showBannerTicketInfo()
             })
      
             // Ngăn reload trang của form phần Modal và show thông tin
             $(document).on('submit', '.modal-form', function(e) {
              let $this = $(this)
              e.preventDefault();
              _this.showModalTicketInfo()
             })
          },
        validate: function() {
            let _this = this
            // validate thanh searchBar 
            $('.header-search-Bar').validate({
              rules: {
                "searchBar": {
                  required: true,
                }
              },  
              messages: {
                "searchBar": {
                  required: 'Bạn chưa nhập gì vào đây',
                }
              }
            })
      
            // validate form Kiểm tra đơn hàng
            $('#check-product-form').validate({
              rules: {
                "userPhoneNumber": {
                  required: true,
                          maxlength: 10,
                  digits : true
                },
                "userEmail": {
                  required: true,
                  email: true
                },
                "userProductCode": {
                  required: true,
                  maxlength: 10
                },
              },
              messages: {
                "userPhoneNumber": {
                  required: 'Bạn chưa nhập số điện thoại',
                          maxlength: 'Độ dài tối đa: 10',
                  digits : 'Yêu cầu bạn nhập số'
                },
                "userEmail": {
                  required: 'Bạn chưa nhập email',
                  email: 'Không đúng định dạng Email'
                },
                "userProductCode": {
                  required: 'Bạn chưa nhập mã đơn hàng',
                  maxlength: 'Nhập tối đa 10 ký tự'
                },
              },
            })
      
            // validate form 1 chiều
            $('#one-way-validator').validate({
              rules: {
                "StartFrom": {
                  required: true,
                },
                "birthday": {
                  required: true,
                  maxlength: 10,
                  //date: true,
                },
                "Adult": {
                  required: true,
                  maxlength: 2,
                  digits : true
                },
                "Kid": {
                  required: true,
                  maxlength: 2,
                  digits : true
                },
                "Baby": {
                  required: true,
                  maxlength: 2,
                  digits : true
                },
              },
              messages: {
                "StartFrom": {
                  required: 'Bạn chưa chọn điểm đi',
                },
                "birthday": {
                  required: 'Bạn chưa nhập trường này',
                  maxlength: 'Bạn vui lòng nhập tối đa 10 ký tự',
                  //date: 'Bạn chưa nhập đúng định dạng Ngày - Tháng - Năm',
                },
                "Adult": {
                  required: 'Vui lòng nhập số lượng',
                  maxlength: 'Tối đa 2 ký tự',
                  digits : 'Chỉ nhập số'
                },
                "Kid": {
                  required: 'Vui lòng nhập số lượng',
                  maxlength: 'Tối đa 2 ký tự',
                  digits : 'Chỉ nhập số'
                },
                "Baby": {
                  required: 'Vui lòng nhập số lượng',
                  maxlength: 'Tối đa 2 ký tự',
                  digits : 'Chỉ nhập số'
                },
              }
            })
      
            // validate form khứ hồi
            $('#round-trip-validator').validate({
              rules: {
                "StartFrom": {
                  required: true,
                },
                "EndTo": {
                  required: true,
                },
                "birthday": {
                  required: true,
                  maxlength: 10,
                },
                "Adult": {
                  required: true,
                  maxlength: 2,
                  digits : true
                },
                "Kid": {
                  required: true,
                  maxlength: 2,
                  digits : true
                },
                "Baby": {
                  required: true,
                  maxlength: 2,
                  digits : true
                },
              },
              messages: {
                "StartFrom": {
                  required: 'Bạn chưa chọn điểm đi',
                },
                "EndTo": {
                  required: 'Bạn chưa chọn điểm đến',
                },
                "birthday": {
                  required: 'Bạn chưa nhập trường này',
                  maxlength: 'Bạn vui lòng nhập tối đa 10 ký tự',
                },
                "Adult": {
                  required: 'Vui lòng nhập số lượng',
                  maxlength: 'Tối đa 2 ký tự',
                  digits : 'Chỉ nhập số'
                },
                "Kid": {
                  required: 'Vui lòng nhập số lượng',
                  maxlength: 'Tối đa 2 ký tự',
                  digits : 'Chỉ nhập số'
                },
                "Baby": {
                  required: 'Vui lòng nhập số lượng',
                  maxlength: 'Tối đa 2 ký tự',
                  digits : 'Chỉ nhập số'
                },
              }
            })
      
            // validate form 1 chiều phần Modal
            $('#modal__one-way-form').validate({
              rules: {
                "startAt": {
                  required: true
                },
                "birthday": {
                  required: true
                },
                "adult": {
                  required: true,
                  number: true,
                  maxlength: 2
                },
                "children": {
                  required: true,
                  number: true,
                  maxlength: 2,
                },
                "baby": {
                  required: true,
                  number: true,
                  maxlength: 2
                },
                "customerName": {
                  required: true,
                },
                "customerEmail": {
                  required: true,
                  email: true
                },
                "customerPhone": {
                  required: true,
                  number: true
                },
                "anotherRequest": {
                  maxlength: 200
                }
              },
              messages: {
                "startAt": {
                  required: 'Bạn chưa nhập mục này'
                },
                "birthday": {
                  required: 'Bạn chưa nhập mục này'
                },
                "adult": {
                  required: 'Bạn chưa nhập mục này',
                  number: 'Bạn phải nhập số từ 0-9',
                  maxlength: 'Nhập tối đa 2 chữ Số'
                },
                "children": {
                  required: 'bạn chưa nhập mục này',
                  number: 'Bạn phải nhập số từ 0-9',
                  maxlength: 'Nhập tối đa 2 chữ Số',
                },
                "baby": {
                  required: 'bạn chưa nhập mục này',
                  number: 'Bạn phải nhập số từ 0-9',
                  maxlength: 'Nhập tối đa 2 chữ Số'
                },
                "customerName": {
                  required: 'Bạn chưa nhập mục này',
                },
                "customerEmail": {
                  required: 'Bạn chưa nhập mục này',
                  email: 'chưa đúng dạng email'
                },
                "customerPhone": {
                  required: 'Bạn chưa nhập mục này',
                  number: 'chưa đúng định dạng kiểu số'
                },
                "anotherRequest": {
                  maxlength: 'Tối đa 200 ký tự'
                }
              }
            })
      
             // validate form khứ hồi phần Modal
             $('#modal__round-trip-form').validate({
              rules: {
                "startAt": {
                  required: true
                },
                "endAt": {
                  required: true
                },
                "birthday": {
                  required: true
                },
                "adult": {
                  required: true,
                  number: true,
                  maxlength: 2
                },
                "children": {
                  required: true,
                  number: true,
                  maxlength: 2,
                },
                "baby": {
                  required: true,
                  number: true,
                  maxlength: 2
                },
                "customerName": {
                  required: true,
                },
                "customerEmail": {
                  required: true,
                  email: true
                },
                "customerPhone": {
                  required: true,
                  number: true
                },
                "anotherRequest": {
                  maxlength: 200
                }
              },
              messages: {
                "startAt": {
                  required: 'Bạn chưa nhập mục này'
                },
                "endAt": {
                  required: 'Bạn chưa nhập mục này'
                },
                "birthday": {
                  required: 'Bạn chưa nhập mục này'
                },
                "adult": {
                  required: 'Bạn chưa nhập mục này',
                  number: 'Bạn phải nhập số từ 0-9',
                  maxlength: 'Nhập tối đa 2 chữ Số'
                },
                "children": {
                  required: 'bạn chưa nhập mục này',
                  number: 'Bạn phải nhập số từ 0-9',
                  maxlength: 'Nhập tối đa 2 chữ Số',
                },
                "baby": {
                  required: 'bạn chưa nhập mục này',
                  number: 'Bạn phải nhập số từ 0-9',
                  maxlength: 'Nhập tối đa 2 chữ Số'
                },
                "customerName": {
                  required: 'Bạn chưa nhập mục này',
                },
                "customerEmail": {
                  required: 'Bạn chưa nhập mục này',
                  email: 'chưa đúng dạng email'
                },
                "customerPhone": {
                  required: 'Bạn chưa nhập mục này',
                  number: 'chưa đúng định dạng kiểu số'
                },
                "anotherRequest": {
                  maxlength: 'Tối đa 200 ký tự'
                }
              }
            })

            // validate Fly filter
            _this.validateStopPlaceFilter()
          },
          showProductInfo: function() {
            $('.js-submit-product-form').click(function (e) { 
              let $this = $(this)
               let $container = $this.closest('.js-check-form')
               let $phoneNumber = $container.find('input[name="userPhoneNumber"]')
               let $email = $container.find('input[name="userEmail"]')
               let $productCode = $container.find('input[name="userProductCode"]')
      
              if(($phoneNumber.val() && $email.val() && $productCode.val()) == '') {
                console.log('')
              } else {
                console.log('Thông tin đơn hàng:')
                console.log(` - Số điện thoại khách hàng: ${$phoneNumber.val()}`)
                console.log(` - Email khách hàng: ${$email.val()}`)
                console.log(` - Mã đơn hàng: ${$productCode.val()}`)
                console.log('----------------')
              }
            });
          },
          showBannerTicketInfo: function() {
            $('.banner-submit-form').click(function (e) { 
              let $this = $(this)
                let $banner = $this.closest('.banner-get-value')
                let $airportValue = $banner.find('input.banner-airport-value')
                let $dateValue = $banner.find('input.date-range-picker-input')
                let $customerValue = $banner.find('input.quantity-customer')
      
                console.log('Thông tin vé: ')
      
                $($airportValue).each(function (index, element) {
                  console.log(`${$(this).data("type")} ${$(this).val()}`)  
                });
                $($dateValue).each(function (index, element) {
                  console.log(`${$(this).data("type")} ${$(this).val()}`)  
                });
                $($customerValue).each(function (index, element) {
                  console.log(`${$(this).data("type")} ${$(this).val()}`)  
                });
                
                console.log('------------------')
            });
          },
          showModalTicketInfo: function() {
            $('.book-ticket .selection-button').click(function (e) { 
              let $this = $(this)
              let $form = $this.closest('.modal-form')
              let $airport = $form.find('.form-value')
              let $date = $form.find('input[name="birthday"]')
              let $customerQuantity = $form.find('.quantity-customer')
              let $customerInfo = $form.find('.booking-infomation-input')
              let $topicQuantity = $form.find('input[name="topic"]')
              let $specialRequest = $form.find('input[name="anotherRequest"]')
      
              console.log('Thông tin vé: ')
      
              $($airport).each(function (index, element) {
                console.log(`${$(this).data("type")} ${$(this).val()}`)  
              });
              $($date).each(function (index, element) {
                console.log(`${$(this).data("type")} ${$(this).val()}`)  
              });
              $($customerQuantity).each(function (index, element) {
                console.log(`${$(this).data("type")} ${$(this).val()}`)  
              });
              $($customerInfo).each(function (index, element) {
                console.log(`${$(this).data("type")} ${$(this).val()}`)  
              });
              $($topicQuantity).each(function (index, element) {
                console.log(` Đặc biệt: ${$(this).val()}`)  
              });
              $($specialRequest).each(function (index, element) {
                console.log(`${$(this).data("type")} ${$(this).val()}`)  
              });
      
              console.log('----------------------')
            });
          },
          validateStopPlaceFilter: function() {
            $(document).on('change', '.filter-stop-straight-ahead', function (e) {
              let $this = $(this)
              let $container = $this.closest('.row')
              let $colCompare = $container.find('.validate-stop-place-filter')
              let $checkboxOfColCompare = $colCompare.find('input[type="radio"]')
              if($this.is(":checked")) {
                $($colCompare).addClass('invalid');
                
                if( $($colCompare).hasClass('invalid')) {
                  $($checkboxOfColCompare).attr('disabled', '');
                }
              } else {
                $($colCompare).removeClass('invalid');
                $($checkboxOfColCompare).removeAttr('disabled');
              }
            })

            // let $this = $('input.filter-stop-straight-ahead')
            // cons
          },
    }

    validate.init()
});