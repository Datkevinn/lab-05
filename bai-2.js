class hinhChuNhat {
  constructor(chieuDai, chieuRong) {
    this.chieuDai = chieuDai;
    this.chieuRong = chieuRong;
  }

  tinhChiVi(){
    return 2*(this.chieuDai + this.chieuRong);
  }

  tinhDienTich(){
    return this.chieuDai * this.chieuRong;
  }
}

const hinhChuNhat1 = new hinhChuNhat(5,6);
console.log("Chu vi hcn la: "+hinhChuNhat1.tinhChiVi());
console.log("Dien tich hcn la: " + hinhChuNhat1.tinhDienTich());
