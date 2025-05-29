import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getTotalPrice(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }
    
    getDiscountedPrice(discount: number): number {
        const total = this.getTotalPrice();
        return total - (total * discount / 100);
    }

    removeById(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}