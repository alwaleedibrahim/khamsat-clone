interface Item {
    upgrades?: [{_id: string}]
    id: string,
    quantity?: number
}
interface IUpgrade {
    upgradeId: string
}
interface ICartItem {
    serviceId: string;
    quantity: number;
    upgrades: IUpgrade[]
}
export interface ICartItems {
    items: ICartItem[]
}

export function parseCart(items: Item[]) :ICartItems {
    const cartItems : ICartItems = {
        items: []
    } 
    items.forEach((item: Item) => {
        const upgrades : IUpgrade[] = []
        item.upgrades?.forEach(u => upgrades.push({upgradeId: u._id}))
        const parsedItem : ICartItem = {
            serviceId: item.id,
            quantity: item.quantity || 0,
            upgrades : upgrades
        }
        cartItems.items.push(parsedItem)
    })
    return cartItems
}