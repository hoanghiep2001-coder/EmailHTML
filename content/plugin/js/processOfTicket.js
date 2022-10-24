let processOfTicketArr = [
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
  ]

  let processOfTicket = 'Digiticket__Ticket-process';

  localStorage.setItem(processOfTicket, JSON.stringify(processOfTicketArr));