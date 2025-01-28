import React from 'react'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { DatePicker } from '@/components/DatePicker'

const AddBill = () => {
    return (
        <div className='h-full'>
            <Card className="mx-auto mt-24 w-[350px]">
                <CardHeader>
                    <CardTitle>支払いの追加</CardTitle>
                    <CardDescription>支払った日時と金額を設定してください。</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="amountOfMoney">金額</Label>
                                <Input type='number' id="amountOfMoney" placeholder="¥0" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="date">日時</Label>
                                <DatePicker />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">キャンセル</Button>
                    <Button>追加</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default AddBill