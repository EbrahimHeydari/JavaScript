// Created With Reavealing Module Pattern

// Storage Controller
const StorageCtrl = (() => {
  return {
    storeItem: item => {
      let items

      if (localStorage.getItem('items') === null)
        items = []
      else
        items = JSON.parse(localStorage.getItem('items'))

      items.push(item)
      localStorage.setItem('items', JSON.stringify(items))
    },
    getItemsFromStorage: () => {
      let items
      if (localStorage.getItem('items') === null)
        items = []
      else
        items = JSON.parse(localStorage.getItem('items'))

      return items
    },
    updateItemStorage: updatedItem => {
      let items = JSON.parse(localStorage.getItem('items'))

      items.map((item, index) => {
        if (updatedItem.id === item.id)
          items.splice(index, 1, updatedItem)
      })
      localStorage.setItem('items', JSON.stringify(items))
    },
    deleteItemFromStorage: id => {
      let items = JSON.parse(localStorage.getItem('items'))

      items.map((item, index) => {
        if (id === item.id)
          items.splice(index, 1)
      })
      localStorage.setItem('items', JSON.stringify(items))
    },
    clearItemsFromStorage: () => localStorage.removeItem('items')
  }
})()


// Item Controller
const ItemCtrl = (() => {
  // Constructor
  const Item = function (id, name, calories) {
    this.id = id
    this.name = name
    this.calories = calories
  }

  // State
  const data = {
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }

  // Public Methods
  return {
    getItems: () => data.items,
    logData: () => data,
    addItem: (name, calories) => {
      let ID
      if (data.items.length > 0)
        ID = data.items[data.items.length - 1].id + 1
      else
        ID = 1

      calories = parseInt(calories)

      newItem = new Item(ID, name, calories)
      data.items.push(newItem)

      return newItem
    },
    getItemById: id => {
      let found = null
      data.items.map(item => {
        if (item.id === id)
          found = item
      })
      return found
    },
    updateItem: (name, calories) => {
      calories = parseInt(calories)
      let found = null

      data.items.map(item => {
        if (item.id === data.currentItem.id) {
          item.name = name
          item.calories = calories
          found = item
        }
      })
      return found
    },
    deleteItem: id => {
      const ids = data.items.map(item => item.id)
      const index = ids.indexOf(id)
      data.items.splice(index, 1)
    },
    clearAllItems: () => data.items = [],
    setCurrentItem: item => data.currentItem = item,
    getCurrentItem: () => data.currentItem,
    getTotalCalories: () => {
      let total = 0
      data.items.map(item => total += item.calories)
      data.totalCalories = total
      return data.totalCalories
    }
  }
})()


// UI Controller
const UICtrl = (() => {
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }

  // Public Methods
  return {
    getSelectors: () => UISelectors,
    populateItemList: items => {
      items.map(item => {
        document.querySelector(UISelectors.itemList).innerHTML += `
        <li class='collection-item' id='item-${item.id}'>
          <b>${item.name}: </b><em>${item.calories} Calories</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i> </a>
        </li>`
      })
    },
    getItemInput: () => {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: item => {
      document.querySelector(UISelectors.itemList).style.display = 'block'
      const li = document.createElement('li')
      li.className = 'collection-item'
      li.id = `item-${item.id}`
      li.innerHTML = `
      <b>${item.name}: </b> <em>${item.calories} Calories</em>
      <a href='#' class='secondary-content'>
        <i class='edit-item fa fa-pencil'></i>
      </a>`
      document.querySelector(UISelectors.itemList).appendChild(li)
    },
    updateListItem: item => {
      let listItems = document.querySelectorAll(UISelectors.listItems)
      listItems = Array.from(listItems)

      listItems.map(listItem => {
        const itemID = listItem.getAttribute('id')
        console.log('ie', listItem)

        if (itemID === `item-${item.id}`)
          document.querySelector(`#${itemID}`).innerHTML = `
          <b>${item.name}: </b> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`
      })
    },
    deleteListItem: id => {
      const itemID = `#item-${id}`
      const item = document.querySelector(itemID)
      item.remove()
    },
    clearInput: () => {
      document.querySelector(UISelectors.itemNameInput).value = ''
      document.querySelector(UISelectors.itemCaloriesInput).value = ''
    },
    addItemToForm: () => {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories
      UICtrl.showEditState()
    },
    removeItems: () => {
      let listItems = document.querySelectorAll(UISelectors.listItems)

      listItems = Array.from(listItems)
      listItems.forEach(item => item.remove())
    },
    clearEditState: () => {
      UICtrl.clearInput()
      document.querySelector(UISelectors.updateBtn).style.display = 'none'
      document.querySelector(UISelectors.deleteBtn).style.display = 'none'
      document.querySelector(UISelectors.backBtn).style.display = 'none'
      document.querySelector(UISelectors.addBtn).style.display = 'inline'
    },
    showEditState: () => {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline'
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline'
      document.querySelector(UISelectors.backBtn).style.display = 'inline'
      document.querySelector(UISelectors.addBtn).style.display = 'none'
    },
    hideList: () => document.querySelector(UISelectors.itemList).style.display = 'none',
    showTotalCalories: totalCalories => document.querySelector(UISelectors.totalCalories).innerHTML = totalCalories
  }
})()


// App Controller
const App = ((ItemCtrl, StorageCtrl, UICtrl) => {
  // event listeners
  const loadEventListeners = () => {
    const UISelectors = UICtrl.getSelectors()
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick)
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit)
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit)
    document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState)
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick)
    document.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        event.preventDefault()
        return false
      }

    })
  }

  const itemAddSubmit = event => {
    event.preventDefault()

    const input = UICtrl.getItemInput()
    if (input.name.trim() !== '' && input.calories.trim() !== '') {
      const newItem = ItemCtrl.addItem(input.name, input.calories)
      UICtrl.addListItem(newItem)
      const totalCalories = ItemCtrl.getTotalCalories()
      UICtrl.showTotalCalories(totalCalories)
      UICtrl.clearInput()
      StorageCtrl.storeItem(newItem)
    }
  }

  const itemEditClick = event => {
    event.preventDefault()

    if (event.target.classList.contains('edit-item')) {
      const itemId = event.target.parentNode.parentNode.id
      const listIdArr = itemId.split('-')
      const id = parseInt(listIdArr[1])
      const itemToEdit = ItemCtrl.getItemById(id)
      ItemCtrl.setCurrentItem(itemToEdit)
      UICtrl.addItemToForm()
    }
  }

  const itemUpdateSubmit = event => {
    event.preventDefault()
    const input = UICtrl.getItemInput()
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories)
    UICtrl.updateListItem(updatedItem)
    const totalCalories = ItemCtrl.getTotalCalories()
    UICtrl.showTotalCalories(totalCalories)
    StorageCtrl.updateItemStorage(updatedItem)
    UICtrl.clearEditState()
  }

  const itemDeleteSubmit = event => {
    event.preventDefault()
    const currentItem = ItemCtrl.getCurrentItem()
    ItemCtrl.deleteItem(currentItem.id)
    UICtrl.deleteListItem(currentItem.id)
    const totalCalories = ItemCtrl.getTotalCalories()
    UICtrl.showTotalCalories(totalCalories)
    StorageCtrl.deleteItemFromStorage(currentItem.id)
    UICtrl.clearEditState()
  }

  const clearAllItemsClick = () => {
    ItemCtrl.clearAllItems()
    const totalCalories = ItemCtrl.getTotalCalories()
    UICtrl.showTotalCalories(totalCalories)

    UICtrl.removeItems()
    StorageCtrl.clearItemsFromStorage()
    UICtrl.hideList()
  }

  // Public Methods
  return {
    init: () => {
      // Claer edit state
      UICtrl.clearEditState()
      // fetch items
      const items = ItemCtrl.getItems()
      // check item in list
      if (!items.length)
        UICtrl.hideList()
      // Populate list with items
      UICtrl.populateItemList(items)
      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories()
      // add total calories
      UICtrl.showTotalCalories(totalCalories)
      // Load event listeners
      loadEventListeners()
    }
  }
})(ItemCtrl, StorageCtrl, UICtrl)

// Initialize App
App.init()