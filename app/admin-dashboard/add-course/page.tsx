'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SyncLoader } from 'react-spinners';
type Inputs = {
    course_title: string;
    instructor: string;
    price: string;
    batch: string;
    status: string;
    syllabus: string;
    description: string;
}

const instructors = [
    { id: 1, name: 'Mohaiminul Islam' },
    { id: 2, name: 'Masud Rahman' },
    { id: 3, name: 'Humayra Shajan' },

]
const batches = [
    { id: 1, name: 'Batch-1' },
    { id: 2, name: 'Batch-2' },
    { id: 3, name: 'Batch-3' },

]
const statuses = [
    { id: 1, name: 'Published' },
    { id: 2, name: 'Unpublished' },
]
const AddCourse = () => {
    const [instructor, setInstructor] = useState('');
    const [batch, setBatch] = useState('');
    const [status, setStatus] = useState('');
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (course_data) => {
        console.log(course_data)
    }
    const isPending = false;
    return (
        <section>
            <div className='text-center'>
                <h2 className="text-3xl font-semibold">Course Master</h2>
                <p className="text-gray-600">Manage and organize your courses efficiently</p>
            </div>
            {/* form */}
            <div className="space-y-5 bg-foreground p-8 max-w-xl mx-auto text-white mt-8 rounded-md">
                < form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5 max-w-xl mx-auto text-white mt-8">
                    {/* Title */}
                    <div className='space-y-2 grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div>
                            <Label htmlFor="course_title ">Course Title <span className="text-red-600 font-bold mb-2">*</span></Label>
                            <Input  {...register('course_title')} id="course_title" placeholder="enter your event title" name="course_title" required />
                            {errors.course_title && <p className="text-sm text-red-500">{errors.course_title.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="instructor">Instructor Name <span className="text-red-600 font-bold mb-2">*</span></Label>
                            <Select
                                onValueChange={(value) => {
                                    setInstructor(value); setValue("instructor", value, { shouldValidate: true });
                                }}
                                value={instructor}
                            >
                                <SelectTrigger
                                    className="w-full mx-auto">
                                    <SelectValue
                                        placeholder="Instructor Name"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        instructors.map((instructor) => <SelectItem
                                            key={instructor.id}
                                            value={instructor.name}>{instructor.name}</SelectItem>)
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {/* row-2 */}
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

                            {/* Price-num */}
                            <div className='space-y-2'>
                                <Label htmlFor="price">Price<span className="text-red-600 font-bold">*</span></Label>
                                <Input    {...register('price')} id="price" placeholder="enter Price" name="price" required />
                                {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
                            </div>
                            {/* batch */}
                            <div className='space-y-2'>
                                <Label htmlFor="contact">Batch<span className="text-red-600 font-bold">*</span></Label>
                                <Select
                                    onValueChange={(value) => {
                                        setBatch(value); setValue("batch", value, { shouldValidate: true });
                                    }}
                                    value={batch}
                                >
                                    <SelectTrigger
                                        className="w-full mx-auto">
                                        <SelectValue
                                            placeholder="Batch Number"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            batches.map((batch) => <SelectItem
                                                key={batch.id}
                                                value={batch.name}>{batch.name}</SelectItem>)
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                            {/*status  */}
                            <div className='space-y-2'>
                                <Label htmlFor="contact">Status<span className="text-red-600 font-bold">*</span></Label>
                                <Select
                                    onValueChange={(value) => {
                                        setStatus(value); setValue("status", value, { shouldValidate: true });
                                    }}
                                    value={status}
                                >
                                    <SelectTrigger
                                        className="w-full mx-auto">
                                        <SelectValue
                                            placeholder="Select Status"
                                        />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            statuses.map((status) => <SelectItem
                                                key={status.id}
                                                value={status.name}>{status.name}</SelectItem>)
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    {/* Description */}
                    <div className='space-y-2'>
                        <Label htmlFor="description">Syllabus<span className="text-red-600 font-bold">*</span></Label>
                        <Textarea    {...register('description')} id="description" name="description" placeholder="enter your description event" required className='border w-full p-1 rounded-md' />
                        {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor="description">Description <span className="text-red-600 font-bold">*</span></Label>
                        <Textarea    {...register('description')} id="description" name="description" placeholder="enter your description event" required className='border w-full p-1 rounded-md' />
                        {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
                    </div>


                    <Button type="submit" className="w-full mt-5">{isPending ? <SyncLoader
                        color="black"
                        size={8}

                    /> : "Create Event"}</Button>
                </form>
            </div>
        </section>
    );
};

export default AddCourse;