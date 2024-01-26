import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'
import { Purchase } from '../../../../../../data/data'

type Props = {
    purchaseDetail: Purchase
}

const CompanyPurchaseRowData = ({purchaseDetail}: Props) => {
  return (
    <DataTable.Row>
      <DataTable.Cell>{purchaseDetail.date}</DataTable.Cell>
      <DataTable.Cell>
        {purchaseDetail.amount.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </DataTable.Cell>
    </DataTable.Row>
  )
}

export default CompanyPurchaseRowData

const styles = StyleSheet.create({})