const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const { getDateCriteria, getFormatedMonth, getChartData } = require('../date-process')
const categories = ['家居物業', '交通出行', '休閒娛樂', '餐飲食品', '其他']
const availableDate = { begin: new Date('2000-01-01'), end: new Date('2030-01-01') }

// Include models
const db = require('../models')
const Record = db.Record

module.exports = {
  getSearchExpense: async (req, res) => {
    // keep filtered options
    const { month, category, defaultCategory, defaultMonth, monthReset, categoryReset } = req.query
    const selectedMonth = (monthReset || (!month && !defaultMonth)) ? null
      : month ? month : defaultMonth

    const selectedCategory = (categoryReset || (!category && !defaultCategory)) ? null
      : category ? category : defaultCategory

    const months = []

    try {
      // find all records
      const allRecords = await Record.findAll({
        where: { UserId: req.user.id },
        order: [['date', 'DESC']]
      })

      // get month options for filter
      allRecords.forEach(record => {
        const displayDate = getFormatedMonth(record, false)
        if (months.includes(displayDate)) { return }
        months.push(displayDate)
      })

      // find matching records
      const displayRecords = await Record.findAll({
        where: {
          date: selectedMonth ? getDateCriteria(selectedMonth) : { [Op.between]: [availableDate.begin, availableDate.end] },
          category: selectedCategory ? selectedCategory : { [Op.or]: categories },
          UserId: req.user.id
        },
        order: [['date', 'DESC']]
      })

      // check if any record is found
      const isEmptyRecord = displayRecords.length ? false : true
      // find total expense
      const totalAmount = displayRecords.reduce((acc, cur) => acc + cur.amount, 0)
      // get chart data
      const chartData = getChartData(displayRecords)
      res.render('index', { indexCSS: true, records: displayRecords, totalAmount, selectedCategory, selectedMonth, months, chartData, showChart: true, isEmptyRecord })
    } catch (err) {
      console.log(err)
    }
  }
}