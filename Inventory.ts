class Product {
     public ID: string;
     public NameSP: string;
     public Gia: number;
     public TonKho: number;
     constructor(pID: string, nameSP: string, Gia: number, TonKho: number) {
          this.ID = pID;
          this.NameSP = nameSP;
          this.Gia = Gia;
          this.TonKho = TonKho;
     }
     getId(): string {
          return this.ID;
      }
  
      getName(): string {
          return this.NameSP;
      }
  
      getPrice(): number {
          return this.Gia;
      }
  
      getQuantity(): number {
          return this.TonKho;
      }
      setprice(price: number):void{
          this.Gia = price;
      }
}
class Inventory{
     protected products: Product[];
     protected lastIndex: number;
     constructor() {
          this.lastIndex = 0;
          this.products = [];
     }
     addProduct(product: Product ):void{
          this.products.push(product);
          this.lastIndex +=1;
     }
     removeProduct(product: Product):void{
          this.products = this.products.filter(p => p.getId() !== product.getId());
     }
     updateProduct(pro : Product):void{
          this.products = this.products.map((i: Product) => {
               if(i.getId()=== pro.getId()){
                    return pro;
               }
               return i;
          });
          
     }
     getProduct(){
          return this.products;
     }
}
const vegetable = new Product("p01", 'Rau củ', 10, 100);
const meat = new Product("p02", 'Thịt', 20, 50);
const snack = new Product("p03", 'Đồ ăn vặt', 5, 200);
const cannedFood = new Product("p04", 'Đồ hộp', 15, 80);

const inven = new Inventory();
inven.addProduct(vegetable);
inven.addProduct(meat);
inven.addProduct(snack);
inven.addProduct(cannedFood);

console.log("Danh sách sản phẩm trong kho!");
console.log(inven.getProduct());

meat.setprice(9000);
inven.updateProduct(meat);
console.log(inven.getProduct());
