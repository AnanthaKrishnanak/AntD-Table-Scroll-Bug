import { Layout, Menu, MenuProps, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Sider from "antd/es/layout/Sider";
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import React from "react";

interface DataType {
	key: React.Key;
	name: string;
	age: number;
	address: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: "Full Name",
		width: 100,
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Age",
		width: 100,
		dataIndex: "age",
		key: "age",
	},
	{
		title: "Column 1",
		dataIndex: "address",
		key: "1",
		width: 150,
	},
	{
		title: "Column 2",
		dataIndex: "address",
		key: "2",
		width: 150,
	},
	{
		title: "Column 3",
		dataIndex: "address",
		key: "3",
		width: 150,
	},
	{
		title: "Column 4",
		dataIndex: "address",
		key: "4",
		width: 150,
	},
	{
		title: "Column 5",
		dataIndex: "address",
		key: "5",
		width: 150,
	},
	{
		title: "Column 6",
		dataIndex: "address",
		key: "6",
		width: 150,
	},
	{
		title: "Column 7",
		dataIndex: "address",
		key: "7",
		width: 150,
	},
	{ title: "Column 8", dataIndex: "address", key: "8" },
	{
		title: "Action",
		key: "operation",
		width: 100,
		render: () => <a>action</a>,
	},
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
	data.push({
		key: i,
		name: `Edward ${i}`,
		age: 32,
		address: `London Park no. ${i}`,
	});
}
const items2: MenuProps["items"] = [
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
].map((icon, index) => {
	const key = String(index + 1);

	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: `subnav ${key}`,

		children: new Array(4).fill(null).map((_, j) => {
			const subKey = index * 4 + j + 1;
			return {
				key: subKey,
				label: `option${subKey}`,
			};
		}),
	};
});
const App: React.FC = () => {
	return (
		<Layout style={{ height: "100%", width: "100%" }} hasSider>
			<Sider width={200} collapsible style={{height:'95vh'}}>
				<Menu
					mode="inline"
					defaultSelectedKeys={["1"]}
					defaultOpenKeys={["sub1"]}
					style={{ height: "100%" }}
					items={items2}
				/>
			</Sider>
			<Content>
				<Table
					columns={columns}
					dataSource={[]}
					scroll={{ x: 1500 }}
					// antd site header height
					sticky={{ offsetHeader: 64 }}
				/>
			</Content>
		</Layout>
	);
};

export default App;
