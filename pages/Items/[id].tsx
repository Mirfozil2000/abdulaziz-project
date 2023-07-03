import CarInfo from '@/components/CarInfo'
import { Items } from '@/redux/slices/saveItemsSlice'
import axios from 'axios'
import { FC } from 'react'

type ItemProps = {
	items: Items
}

const Item: FC<ItemProps> = ({ items }) => {
	return (
		<>
			<CarInfo items={items} />
		</>
	)
}

export const getServerSideProps = async (context: any) => {
	const id = context.params.id

	const res = await axios.get(
		`https://my-json-server.typicode.com/Azi312/back-for-Cars/items/${id}`
	)
	const data = await res.data

	return { props: { items: data } }
}


export default Item
