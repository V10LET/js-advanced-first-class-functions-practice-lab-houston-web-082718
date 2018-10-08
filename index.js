function logDriverNames(drivers) {
  drivers.forEach(driver => {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.filter(driver => {
    if (driver.hometown === hometown) {
        console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  const revenueSorter = function(driver1, driver2) {
    return driver1.revenue - driver2.revenue
  }
  return drivers.slice().sort(revenueSorter)
}

function driversByName(drivers) {
  const nameSorter = function(driver1, driver2) {
    name1 = driver1.name
    name2 = driver2.name
    return name1.localeCompare(name2)
  }
  console.log(drivers.slice().sort(nameSorter))
  return drivers.slice().sort(nameSorter)
}

// variables for reduce function calculating total price
const reduceTotalRevenue = function (agg, el, i, arr) {
  console.log('The aggregate up to this point is:', agg)
  console.log("The current element's name is:", el.revenue)
  console.log('The index of the current element is:', i)
  console.log('----------------')
  return agg + el.revenue;
}

function totalRevenue(drivers) {
  console.log(drivers.reduce(reduceTotalRevenue, 0))
  return drivers.reduce(reduceTotalRevenue, 0)
}

function averageRevenue(drivers) {
  console.log(drivers.reduce(reduceTotalRevenue, 0))
  return drivers.reduce(reduceTotalRevenue, 0)/drivers.length
}
