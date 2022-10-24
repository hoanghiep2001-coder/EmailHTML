$(function () {
  let digiticket = {
    init: function () {
      this.render();
      this.handleEvent();
    },
    render: function () {
      // render place dropdown
      this.renderPlaceDropdown();

      // render process of ticket
      this.renderProcessOfTicket();

      // render fly info  
      this.renderListFly();

      // render fly inland
      this.renderFlyInland();
    },
    handleEvent: function () {
      // Close tat ca hanh vi dang active
      this.stopActivingEvents();

      // Chặn tất cả hành vi nổi bọt
      this.stopPropagationEvents();

      // Show list menu khi click vào menu bar
      this.showListMenu();

      // Show check đơn hàng khi click vào Kiểm tra đơn hàng
      this.showCheckForm();

      // swap Khứ hồi và 1 chiều khi click
      this.swapBannerButton();

      // mở ra dropdown khi click chọn chuyến bay
      this.showDropdownAirport();

      // đổ data chuyến bay vào input
      this.showDataAirport();

      // auto Toggle Banner Dropdown
      this.autoToggleDropdown()

      // xổ ra button cộng trừ số lượng
      this.coutQuantityOfCustomer();

      // open modal
      this.showModal();

      // close modal
      this.closeModal();

      // active process 1
      $(".process-item:first-child").addClass("active");

      // active cheapest trip when click the daterange radio input
      this.showCheapestPrice();

      // swap Chuyến đi và chuyến về
      this.swapDirection();

      // swap Modal khứ hồi và 1 chiều
      this.modalSwapButton()

      // scroll to exactly direction
      this.scrollToElement();

      // xổ ra dropdown của bộ lọc
      this.showFilterDropdown();

      // load list ticket when pick filter
      this.loadListTicketWhenPickFilter()

      // count price when seek the first filter
      this.onChangeProgress()

      // click Vé nào xổ ra thông tin vé đó
      this.showTicketInfo();

      // Đổi html của ticket khi ấn Book vé
      this.changeHtmlWhenBook();

      // scroll Top
      this.scrollTop();
    },

    // Array
    placeArr: [
      {
        cityName: "Đà Nẵng, Việt Nam",
        desc: "DAD - Da Nang Airport",
      },
      {
        cityName: "Hà Nội, Việt Nam",
        desc: "HAN - Ha Noi Airport",
      },
      {
        cityName: "Đà Nẵng, Việt Nam",
        desc: "DAD - Da Nang Airport",
      },
      {
        cityName: "Tokyo, Nhật Bản",
        desc: "JPN - NASSAN Airport",
      },
      {
        cityName: "DuBai, Việt Nam",
        desc: "HAN - Ha Noi Airport",
      },
      {
        cityName: "Long Biên, Việt Nam",
        desc: "DAD - Da Nang Airport",
      },
      {
        cityName: "Hà Nội, Việt Nam",
        desc: "HAN - Ha Noi Airport",
      },
      {
        cityName: "Tây Hồ, Việt Nam",
        desc: "DAD - Da Nang Airport",
      },
    ],
    flyInlandArr: [
      {
        name: "1. Lorem ipsum dolor sit amet",
        text1:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        image: "../Content/image/home/thumbnail-1.png",
        desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        text2:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      },
      {
        name: "2. Lorem ipsum dolor sit amet",
        text1:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        image: "../Content/image/home/thumbnail-2.png",
        desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        text2:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      },
    ],
    processOfTicketArr: [
      {
        name: "Tìm chuyến bay",
        numberImg: "../Content/image/home/process-1.svg",
        whenDoneImg: "../Content/image/home/process-done.svg",
        altAttrImg: "process-1",
      },
      {
        name: "Thông tin hành khách",
        numberImg: "../Content/image/home/process-2.svg",
        whenDoneImg: "../Content/image/home/process-done.svg",
        altAttrImg: "process-2",
      },
      {
        name: "Thanh toán",
        numberImg: "../Content/image/home/process-3.svg",
        whenDoneImg: "../Content/image/home/process-done.svg",
        altAttrImg: "process-3",
      },
      {
        name: "Hoàn thành đơn hàng",
        numberImg: "../Content/image/home/process-4.svg",
        whenDoneImg: "../Content/image/home/process-done.svg",
        altAttrImg: "process-4",
      },
    ],
    flyInfoArr: [
      {
        brandOfFly: "../Content/image/home/Bamboo Airways.svg",
        time: "07:00 - 09:15",
        from: "Tp. Hồ Chí Minh",
        to: "Nha Trang",
        fromCode: "HAN",
        toCode: "HUI",
        moreInfo: "#",
        price: "1.521.000đ",
      },
      {
        brandOfFly: "../Content/image/home/VietJet.svg",
        time: "07:00 - 09:15",
        from: "Tp. Hồ Chí Minh",
        to: "Nha Trang",
        fromCode: "HAN",
        toCode: "HUI",
        moreInfo: "#",
        price: "1.521.000đ",
      },
      {
        brandOfFly: "../Content/image/home/Bamboo Airways.svg",
        time: "07:00 - 09:15",
        from: "Tp. Hồ Chí Minh",
        to: "Nha Trang",
        fromCode: "HAN",
        toCode: "HUI",
        moreInfo: "#",
        price: "1.521.000đ",
      },
      {
        brandOfFly: "../Content/image/home/VietJet.svg",
        time: "07:00 - 09:15",
        from: "Tp. Hồ Chí Minh",
        to: "Nha Trang",
        fromCode: "HAN",
        toCode: "HUI",
        moreInfo: "#",
        price: "1.521.000đ",
      },
      {
        brandOfFly: "../Content/image/home/Bamboo Airways.svg",
        time: "07:00 - 09:15",
        from: "Tp. Hồ Chí Minh",
        to: "Nha Trang",
        fromCode: "HAN",
        toCode: "HUI",
        moreInfo: "#",
        price: "1.521.000đ",
      },
      {
        brandOfFly: "../Content/image/home/VietJet.svg",
        time: "07:00 - 09:15",
        from: "Tp. Hồ Chí Minh",
        to: "Nha Trang",
        fromCode: "HAN",
        toCode: "HUI",
        moreInfo: "#",
        price: "1.521.000đ",
      },
      {
        brandOfFly: "../Content/image/home/Bamboo Airways.svg",
        time: "07:00 - 09:15",
        from: "Tp. Hồ Chí Minh",
        to: "Nha Trang",
        fromCode: "HAN",
        toCode: "HUI",
        moreInfo: "#",
        price: "1.521.000đ",
      },
      {
        brandOfFly: "../Content/image/home/VietJet.svg",
        time: "07:00 - 09:15",
        from: "Tp. Hồ Chí Minh",
        to: "Nha Trang",
        fromCode: "HAN",
        toCode: "HUI",
        moreInfo: "#",
        price: "1.521.000đ",
      },
      {
        brandOfFly: "../Content/image/home/Bamboo Airways.svg",
        time: "07:00 - 09:15",
        from: "Tp. Hồ Chí Minh",
        to: "Nha Trang",
        fromCode: "HAN",
        toCode: "HUI",
        moreInfo: "#",
        price: "1.521.000đ",
      },
      {
        brandOfFly: "../Content/image/home/VietJet.svg",
        time: "07:00 - 09:15",
        from: "Tp. Hồ Chí Minh",
        to: "Nha Trang",
        fromCode: "HAN",
        toCode: "HUI",
        moreInfo: "#",
        price: "1.521.000đ",
      },
    ],

    // Function
    renderPlaceDropdown: function () {
      let _this = this;
      let placeDropDown = _this.placeArr.map(function (item, index) {
        return `
          <li class="dropdown-item">
            <h3>${item.cityName}</h3>
            <p>${item.desc}</p>
          </li>
          `;
      });
      $(".dropdown-list").html(placeDropDown.join(""));
    },
    renderFlyInland: function () {
      let flyInland = this.flyInlandArr.map(function (item, index) {
        return `
                <section>
                    <h4 class="name fz-20 mb12">${item.name}</h4>
                    <p class="text mb16">${item.text1}</p>
                    <div class="d-flex justify-content-center mb20">
                        <img src="${item.image}" alt="">
                    </div>
                    <span class="description d-block fz-14 mb20 text-center">${item.desc}</span>
                    <p class="text fz-14 mb32">${item.text2}</p>
                </section>
                `;
      });
      $("#fly-inland").html(flyInland.join(""));
    },
    renderProcessOfTicket: function () {
      let processOfTicket = this.processOfTicketArr.map(function (item, index) {
        return `
                <div class="item d-flex flex-column process-item">
                            <h4 class="process-name">
                                ${item.name}
                            </h4>
                            <img src="${item.numberImg}" alt="${item.altAttrImg}" class="process-number">
                            <img src="${item.whenDoneImg}" alt="process-done" class="process-number-done">
                        </div>
                `;
      });
      $("#process").html(processOfTicket.join(""));
    },
    renderListFly: function () {
      let flyInfo = this.flyInfoArr.map(function (item, index) {
        return `
        <div class="fly-info-ticket">
          <div class="row even align-items-center bg-white no-gutters text-center padt19 padb19 padl20 padr20 pos-relative">
          <div class="item col-2 d-flex align-items-center justify-content-between">
          <input type="radio" name="ticket-chosen">
          <label for=""></label>
          <img src="${item.brandOfFly}" alt="">
      </div>
      <div class="item col">
          <span class="time">${item.time}</span>
      </div>
      <div class="item col-4 d-flex align-items-center justify-content-center">
          <div class="text">
              <h3>${item.from}</h3>
              <span>${item.fromCode}</span>
          </div>
          <img class="ml16 mr16" src="../Content/image/home/arrow-right-black.svg" alt="">
          <div class="text">
              <h3>${item.to}</h3>
              <span>${item.toCode}</span>
          </div>
      </div>
      <div class="item col">
          <h3 class="link">Chi tiết</h3>
      </div>
      <div class="item col">
          <span class="price">
              ${item.price}
          </span>
      </div>
      <div class="item col">
          <div class="book js-change-html">
              Đặt vé
          </div>
      </div>

          </div>    
          <div class="setup-fly padt8 padb8">
          <div class="row no-gutters bg-white padl20 padr20 padt20 padb20 align-items-center justify-content-between">
              <div class="col-2 flex-column text-right">
                   <div class="time time-leave mb66">
                       <h3 class="bg-white blue-info-500 fz-20 lh-24">08:00</h3>
                       <span class="fz-14 lh-20">17/03/2022</span>
                   </div>
                   <div class="total-road-time mb66">
                       <p class="fz-14 lh-20">2h 30m</p>
                   </div>
                   <div class="time time-back">
                      <h3 class="bg-white blue-info-500 fz-20 lh-24">09:15</h3>
                       <span class="fz-14 lh-20">18/03/2022</span>
                   </div>
              </div>
              <div class="road col-1 justify-content-center flex-column text-center">
                  <div class="bg-white text-center">
    
                  </div>
                  <div class="rectangle">
    
                  </div>
                  <div class="bg-grey">
    
                  </div>
              </div>
              <div class="col-9 flex-column">
                  <div class="place ">
                      <h3 class="bg-white blue-info-500">Hà Nội<span class="fz-14 lh-20 ml4">(HAN)</span></h3>
                      <p class="fz-14 lh-20">Sân bay Nội Bài</p>
                  </div>
                  <div class="check-info padl18 padt16 padb16 mt12 mb12 row no-gutters">
                      <div class="col-2">
                          <img src="../Content/image/home/VietJet.svg" alt="">
                      </div>
                      <div class="col-2">
                          <h3 class="bg-white color-grey-900 fz-16 lh-20 mb4">Vietjet Air</h3>
                          <span class="blue-info-500 fz-14 lh-20">NCT-127</span>
                      </div>
                      <div class="col-4 ml6 mr12">
                          <div class="item d-flex">
                              <div class="icon mr12">
                                  <span class="icon-package-black"></span>
                              </div>
                              <div class="content">
                                  <ul class="list">
                                      <li class="item fz-14 lh-20 blue-info-500">
                                          0kg
                                      </li>
                                      <li class="item fz-14 lh-20">
                                          Hành lý
                                      </li>
                                      <li class="item fz-12 lh-18">
                                          (mua khi đặt chỗ)
                                      </li>
                                  </ul>
                                  <ul class="list">
                                      <li class="item fz-14 lh-20 blue-info-500">
                                          7kg
                                      </li>
                                      <li class="item fz-14 lh-20">
                                          Hành lý xách tay
                                      </li>
                                  </ul>
                                  <ul class="list">
                                      <li class="item open-ticket-modal fz-12 lh-20 blue-info-500 d-flex align-items-center justify-content-between">
                                          <span class="icon-note"></span>
                                          <p class="fz-13 lh-20">Xem giá hành lý mua thêm</p>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div class="item d-flex mt14">
                              <div class="icon mr12">
                                  <span class="icon-meal"></span>
                              </div>
                              <div class="content">
                                  <ul class="list">
                                      <li class="item">
                                          Suất ăn
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="item d-flex ">
                              <div class="icon mr12">
                                  <span class="icon-Mt-chiu"></span>
                              </div>
                              <div class="content">
                                  <ul class="list">
                                      <li class="item fz-14 lh-20">
                                          Máy bay
                                      </li>
                                      <li class="item fz-14 lh-20 blue-info-500">
                                          Airbus 555
                                      </li>
                                  </ul>
                                  <ul class="list">
                                      <li class="item fz-14 lh-20">
                                          Sơ đồ ghế ngồi
                                      </li>
                                      <li class="item fz-14 lh-20 blue-info-500">
                                          3-3
                                      </li>
                                  </ul>
                                  <ul class="list">
                                      <li class="item fz-14 lh-20">
                                          Hạng vé
                                      </li>
                                      <li class="item fz-12 lh-20 blue-info-500">
                                          Economy
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="place">
                      <h3 class="bg-white blue-info-500">Huế<span class="fz-14 lh-20 ml4">(HUI)</span></h3>
                      <p class="fz-14 lh-20">Sân bay Phú Bài</p>
                  </div>
              </div>
          </div>
          <div class="row no-gutters total-price padt20 padl20 padr20 padb20 justify-content-end bg-white mt8">
          <div class="col-2"></div>
          <div class="col-1"></div>
          <div class="col-9">
            <div class="row no-gutters">
              <div class="col-4">
                <h3 class="mb12 fz-16 lh-20 color-grey-900">Điều kiện</h3>
                <ul class="list">
                  <li>Vé có khuyến mãi</li>
                </ul>
              </div>
              <div class="col-4">
                <h3 class="mb12 fz-16 lh-20 color-grey-900">Lưu ý sử dụng vé</h3>
                <ul class="list">
                  <li class="d-flex align-items-center color-grey-700">
                    <span class="icon-Dolla"></span>
                    <p class="ml8 fz-14 lh-20">Không hoàn tiền</p>
                  </li>
                  <li  class="d-flex align-items-center color-grey-700">
                  <span class="icon-Bag"></span>
                    <p class="ml8 fz-14 lh-20">Đổi lịch có sẵn</p>
                  </li>
                  <li  class="d-flex align-items-center color-grey-700">
                  <span class="icon-Check"></span>
                    <p class="ml8 fz-14 lh-20">Miễn phí test kháng nguyên </p>
                  </li>
                </ul>
              </div>
              <div class="col-4">
                <h3 class="mb12 color-grey-900">Chi tiết giá</h3>
                <ul class="list">
                  <li class="d-flex align-items-center justify-content-between">
                    <h3 class="fz-14 lh-20 color-grey-900">Vé người lớn cơ bản</h3>
                    <h3 class="fz-14 lh-20 color-grey-900">1.521.000</h3>
                  </li>
                  <li  class="d-flex align-items-center justify-content-between color-grey-700">
                    <p class="fz-14 lh-20">Thuế</p>
                    <p class="fz-14 lh-20">Đã bao gồm</p>
                  </li>
                  <li  class="d-flex align-items-center justify-content-between color-grey-700">
                    <p class="fz-14 lh-20">Tổng giá thông thường</p>
                    <p class="fz-14 lh-20">1.525.000</p>
                  </li>
                  <li  class="d-flex align-items-center justify-content-between color-grey-700">
                    <p class="fz-14 lh-20">Tiết kiệm</p>
                    <p class="fz-14 lh-20 color-success-500">-4.000đ</p>
                  </li>
                </ul>
                <div class="total-price-ticket">
                <ul class="list border-top-grey-400">
                  <li class="d-flex align-items-center justify-content-between padt14">
                    <h3 class="fz-14 lh-20 color-grey-900">Tổng cộng</h3>
                    <h3 class="fz-20 lh-24 color-error-500">1.521.000đ</h3>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        </div>
        `;
      });
      $(".fly-info-content").html(flyInfo.join(""));
    },

    autoToggleDropdown: function() {
      $(document).on('click', '.dropdown-item', function (e) {
        e.stopPropagation();
        let $this = $(this)
        let $container = $this.closest('.banner-airport')
        let $dropdown = $this.closest('.banner-options-dropdown')
        let $triggerLastOption = $container.find('.2nd-options')

        $($triggerLastOption).trigger('click');
        $($dropdown).removeClass('open');
      })

      $('.modal-form .dropdown-item').click(function (e) { 
        e.preventDefault();
        let $this = $(this)
        let $container = $this.closest('.banner-airport')
        let $dropdown = $this.closest('.banner-options-dropdown')
        let $triggerLastOption = $container.find('.2nd-options')

        $($triggerLastOption).trigger('click');
        $($dropdown).removeClass('open');
      });

    },
    coutQuantityOfCustomer: function () {
      $(".quantity-customer").click(function (e) { 
        e.stopPropagation();
        let $this = $(this);
        let $justOpenThis = $('.quantity-customer').not($this)
        let $quantityDiv = $justOpenThis.find(".quantity-options")
        let $value = $this.val()
        let $container = $this.closest(".quantity");
        let $containerValue = $container.find(".quantity-customer");
        let $countDiv = $container.find(".quantity-options");
        let $childValue = $container.find(".count-quantity");
        let $minusButton = $countDiv.find(".count-minus");
        let $plusButton = $countDiv.find(".count-plus");

        let currentValue = $containerValue.val();
        let currentIndex = 0;

        $($childValue).html(Number($value))
        $(".quantity-options").slideUp().not($this);
        $($countDiv).slideDown();


        // trừ số lượng
        $($minusButton).click(function (e) {
          e.stopPropagation();
          if (currentIndex < 1) {
            currentIndex = 0;
          } else {
            currentIndex--;
          }

          $containerValue.val(currentIndex);
          $childValue.html(currentIndex);
        });

        // cộng số lượng
        $($plusButton).click(function (e) {
          e.stopPropagation();
          currentIndex++;
          $containerValue.val(currentIndex);
          $childValue.html(currentIndex);
        });
      });

      $(".quantity-customer").change(function (e) { 
        let $this = $(this);
        let $value = $this.val();
        let $container = $this.closest(".quantity");
        let $countDiv = $container.find(".quantity-options");
        let $childValue = $container.find(".count-quantity");
        let $minusButton = $countDiv.find(".count-minus");
        let $plusButton = $countDiv.find(".count-plus");

        let currentIndex = 0;
        currentIndex = $value;

        $($childValue).html(Number($value))

        // trừ số lượng
        $($minusButton).click(function (e) {
          e.stopPropagation();
          if (currentIndex < 1) {
            currentIndex == 0;
          } else {
            currentIndex--;
          }

          $this.val(currentIndex);
          $childValue.html(currentIndex);
        });

        // cộng số lượng
        $($plusButton).click(function (e) {
          e.stopPropagation();
          currentIndex++;

          $this.val(currentIndex);
          $childValue.html(currentIndex);
        });
      });

      $('.js-modal-body').click(function (e) { 
        e.stopPropagation();
        $('.quantity-options').slideUp()
      });
    },
    changeHtmlWhenBook: function () {
      $(document).on("click", ".js-change-html", function (e) {
        e.stopPropagation();
        let $this = $(this);
        let $slideDownContainer = $this.closest(".fly-info-ticket")
        let $activeContainer = $slideDownContainer.find('.row.even')
        let $formcontainer = $this.closest('.fly-info-content')
        let $setupfly = $slideDownContainer.find('.setup-fly')
        let $ticketHtml = $formcontainer.find('.js-change-html')
        let $container = $formcontainer.find(".fly-info-ticket").not($slideDownContainer); 

        $($this).toggleClass("active");
        $($activeContainer).addClass('active');

        let $allThisNotActive = $('.js-change-html').not('.active')

        if($allThisNotActive) {
  
          $($ticketHtml).html("Đặt vé");

          if($($this).hasClass('active')) {
            $($this).html("Đã chọn");
            $($container).slideUp('slow')

            $("html, body").animate(
              {
                scrollTop: $(".direction").offset().top - 200,
              },
              1000
            )
          } else {
            $($setupfly).slideUp()
            $($container).slideDown('slow')
            $($activeContainer).removeClass('active');
          }
        }
      });
    },
    loadListTicketWhenPickFilter: function() {
      $('.filter-option .filter-load-list-ticket input[type="checkbox"]').change(function (e) { 
        let $this = $(this)
        let $container = $this.closest('.load-list-fulcrum')
        let $loadAnimate = $container.find('.fly-info-loading')
        let $listTicket = $container.find('.fly-info-content')

        $($loadAnimate).fadeIn('slow');
        $($listTicket).fadeOut('slow');
        setTimeout(function hideLoadAnimtion() {
          $($loadAnimate).fadeOut(1000);
          $($listTicket).fadeIn(1000);
        })
      });

      $('.filter-option .filter-load-list-ticket input[type="radio"]').change(function (e) { 
        let $this = $(this)
        let $container = $this.closest('.load-list-fulcrum')
        let $loadAnimate = $container.find('.fly-info-loading')
        let $listTicket = $container.find('.fly-info-content')

        $($loadAnimate).fadeIn('slow');
        $($listTicket).fadeOut('slow');
        setTimeout(function hideLoadAnimtion() {
          $($loadAnimate).fadeOut(1000);
          $($listTicket).fadeIn(1000);
        })
      });
    },
    modalSwapButton: function() {
      $(".modal-selection-button").each(function (index, element) {
        let form = $(".modal-form")[index];

        $(element).click(function (e) {
          let activeElemnt = $(".modal-selection-button.active");
          let activeForm = $(".modal-form.active");
          e.preventDefault();

          $(activeElemnt).removeClass("active");
          $(activeForm).removeClass("active");

          $(this).addClass("active");
          $(form).addClass("active");
        });
      });
    },
    stopActivingEvents: function () {
      $(document).on("click", function () {
        $(".header__subnav-container-bars-list").removeClass("open");
        $(".header__subnav-container-check-button-form").removeClass("open");
        $(".banner-options-dropdown").removeClass("open");
        $(".quantity-options").slideUp();
        $(".fly-info-ticket").removeClass("active");
        $(".js-modal").removeClass("open");
        $(".ticket-info-modal").removeClass("open");
        $(".show-option-button").slideUp();
        $('.show-option-div').removeClass('active')
      });
    },
    stopPropagationEvents: function () {
      $('.js-phone-click').click(function(e){e.stopPropagation()})

      $(".header__subnav-container-check-button-form").click(function (e) {
        e.stopPropagation();
      });
      $(".quantity-options").click(function (e) {
        e.stopPropagation();
      });
      $(".close").click(function (e) {
        e.stopPropagation();
      });
      $(".show-option-button").click(function (e) {
        e.stopPropagation();
      });
      $('.modal input').click(function (e) {
        e.stopPropagation()
      })
      $('.upload-file-label').click(function (e) {
        e.preventDefault()
      })
    },
    showCheckForm: function () {
      $(document).on(
        "click",
        ".header__subnav-container-check-button",
        function (e) {
          e.stopPropagation();
          $(".header__subnav-container-check-button-form").toggleClass("open");
        }
      );
    },
    showListMenu: function () {
      $(document).on("click", ".header__subnav-container-bars", function (e) {
        e.stopPropagation();
        $(".header__subnav-container-bars-list").toggleClass("open");
      });
    },
    showModal: function () {
      $(document).on("click", ".js-open-modal", function (e) {
        e.stopPropagation();
        $(".js-modal").addClass("open");
      });

      $(document).on("click", ".open-ticket-modal", function (e) {
        e.stopPropagation();
        $(".ticket-info-modal").addClass("open");
      });
    },
    closeModal: function () {
      $(".js-close-modal").click(function (e) {
        $(".js-modal").removeClass("open");
      });
    },
    showDataAirport: function () {
      $(".dropdown-item").click(function (e) {
        e.preventDefault();
        let $this = $(this);
        let $parent = $this.closest(".js-banner-options");
        let $input = $parent.find(".banner-airport-value");
        let _text = $this.find("h3").text();

        $input.val(_text);

      });
    },
    showDropdownAirport: function () {
      $(document).on("click", ".js-banner-options", function (e) {
        e.stopPropagation();
        let $this = $(this);
        let $dropdown = $this.find(".banner-options-dropdown");

        $($dropdown).addClass("open");
      });
      $('.modal-form .js-banner-options input').click(function (e) { 
        e.preventDefault();
        let $this = $(this);
        let $container = $this.closest('.js-banner-options')
        let $dropdown = $container.find(".banner-options-dropdown");

        $($dropdown).addClass("open");
      });

      $('.js-modal-body').click(function (e) { 
        e.preventDefault();
        $('.banner-options-dropdown').removeClass('open')
      });
    },
    showCheapestPrice: function () {
      $(document).on("click", 'label[for="date-range-checkbox"]', function (e) {
        e.stopPropagation();
        $(".round-trip-price").show();

        $("html, body").animate(
          {
            scrollTop: $("#round-trip-price").offset().top - 200,
          },
          500
        );
      });
    },
    showFilterDropdown: function () {
      $(document).on("click", ".select-div .show-option-div", function (e) {
        e.stopPropagation();
        let $this = $(this);
        let $dropdown = $this.find(".show-option-button");
        let $thisActive = $(".select-div .show-option-div.active");
        let $activeDropdown = $thisActive.find('.show-option-button')
        
        $($this).addClass("active");

        if ($thisActive) {
          $($dropdown).slideToggle();
          $($thisActive).removeClass("active");

          $($activeDropdown).slideUp();
        }
      });
    },
    showTicketInfo: function () {
      $(document).on("click", ".fly-info-ticket .link", function (e, index) {
        e.stopPropagation();
        let $this = $(this);
        let $formContainer = $this.closest('.fly-info-content')
        let $container = $this.closest('.fly-info-ticket')
        let $dropdown = $container.find(".setup-fly");
        let $thisActive = $(".fly-info-ticket.active");
        let $ticketFly = $this.closest('.fly-info-ticket .even')
        let $allTicketFlyOfContainer = $formContainer.find('.fly-info-ticket .even')

        let $activeDropdown = $thisActive.find(".setup-fly"); 
        let $button = $container.find('.js-change-html')

        if ($($ticketFly).hasClass('acitve')) {        
        } else {
          $($dropdown).slideToggle();
          $($ticketFly).toggleClass('active');  

          $(".setup-fly").not($dropdown).slideUp()
          $($activeDropdown).slideUp();
          $($allTicketFlyOfContainer).not($ticketFly).removeClass('active')
        }

        if($($button).hasClass('active')) {
          $($ticketFly).toggleClass('active'); 
        }
        
      });

    },
    swapBannerButton: function () {
      $(".banner-selection-button").each(function (index, element) {
        let form = $(".form-options")[index];

        $(element).click(function (e) {
          let activeElemnt = $(".banner-selection-button.active");
          let activeForm = $(".form-options.active");
          e.preventDefault();

          $(activeElemnt).removeClass("active");
          $(activeForm).removeClass("active");

          $(this).addClass("active");
          $(form).addClass("active");
        });
      });
    },
    swapDirection: function () {
      $(document).on("click", ".fly-info .content.left-side-bar", function (e) {
        let $this = $(this);
        let $flyWay = $this.find(".fly-way");
        let $activeFlyWay = $(".fly-way.active");
        let $activeDirection = $(".js-change-html.active");

        if ($activeDirection.length === 0) {
          alert("bạn chưa chọn chiều đi");
          $(document).on("click", "#direction", function (e) {
            e.stopPropagation();
          });

        } else {
          $($activeFlyWay).removeClass("active");
          $($flyWay).addClass("active");
        }
      });
    },
    scrollToElement: function () {
      $(document).on("click", "#direction", function (e) {
        e.stopPropagation();
        $("html, body").animate(
          {
            scrollTop: $("#form-list-1").offset().top - 300,
          },
          1000
        );
      });

      $(document).on('click', '.towards', function (e) {
        e.stopPropagation();
        let $this = $(this)
        let $flyway = $this.find('.fly-way')

        if($($flyway).hasClass('active')) {
          $("html, body").animate(
            {
              scrollTop: $("#form-list-2").offset().top - 300,
            },
            1000
          );
        }
      })
    },
    scrollTop: function () {
      jQuery(".scroll-top-behavior").click(function (event) {
        var id_button = ".scroll-top-behavior";

        // Kéo xuống khoảng cách 220px thì xuất hiện button
        var offset = 220;

        // THời gian di trượt là 0.5 giây
        var duration = 500;

        // Thêm vào sự kiện scroll của window, nghĩa là lúc trượt sẽ
        // kiểm tra sự ẩn hiện của button
        jQuery(window).scroll(function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery(id_button).fadeIn(duration);
          } else {
            jQuery(id_button).fadeOut(duration);
          }
        });

        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, duration);
        return false;
      });
    },
    onChangeProgress: function (e) {
      let addString = new String(".000")
        $('.price-range-field').append('<p>.000đ</p>');
    //   $('[data-rangeslider]').rangeslider({
    //     polyfill: false,
    //     rangeClass: 'rangeslider',
    //     disabledClass: 'rangeslider--disabled',
    //     activeClass: 'rangeslider--active',
    //     horizontalClass: 'rangeslider--horizontal',
    //     verticalClass: 'rangeslider--vertical',
    //     fillClass: 'rangeslider__fill',
    //     handleClass: 'rangeslider__handle',

    //     onInit:function() {
    //       $(document).on('input', '[data-rangeslider]', function(e) {
    //         $('output').html(e.target.value + '.000đ')
    //       })
    //     },

    //   })
    },
  }

  digiticket.init();
});
