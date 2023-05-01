import { forwardRef, InputHTMLAttributes } from 'react';
import { VariantProps, cva } from 'cva';
import { cm } from '@/lib/class-merger';

interface InputAttributes
	extends InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputClasses> {}
type AuthInputProps = { wrapperStyle?: string } & InputAttributes;

const inputClasses = cva(
	'rounded-lg text-xl lg:text-2xl outline-none placeholder:text-xl',
	{
		variants: {
			variant: {
				newsletter: [
					'px-12 py-5',
					'bg-Very_light_grayish_blue text-Dark_grayish_blue',
					'placeholder:text-Grayish_blue lg:placeholder:text-2xl',
					'focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-2 focus-visible:outline-Very_light_grayish_blue'
				],
				auth: [
					'peer flex-1 px-8 py-6',
					'text-Dark_grayish_blue',
					'ring-1 ring-Light_grayish_blue',
					'placeholder-shown:bg-Very_light_grayish_blue placeholder-transparent',
					'focus-visible:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-Orange'
				],
				search: [
					'px-8 py-4 caret-Orange',
					'bg-Very_light_grayish_blue text-Dark_grayish_blue',
					'lg:py-6 lg:px-16 lg:placeholder:text-2xl',
					'focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-Very_light_grayish_blue focus-visible:outline-offset-1'
				],
				promo: [
					'w-full px-8 py-4',
					'bg-Very_light_grayish_blue text-Dark_grayish_blue',
					'focus-visible:outline focus-visible:outline-offset-1 focus-visible:outline-2 focus-visible:outline-Orange',
					'placeholder:text-Grayish_blue',
					'lg:py-5 lg:placeholder:text-2xl'
				],
				search_favorite: [
					'px-6 py-2 ml-4 w-full',
					'text-Very_dark_blue',
					'ring-1 ring-Grayish_blue',
					'rounded-md shadow caret-Orange',
					'focus-visible:outline-Orange focus-visible:outline-1',
					'placeholder:text-center'
				]
			},
			rounded: {
				full: 'rounded-full',
				right: 'rounded-tl-none rounded-bl-none',
				left: 'rounded-tr-none rounded-br-none'
			}
		}
	}
);

export const Input = forwardRef<HTMLInputElement, AuthInputProps>(
	({ children, className = '', wrapperStyle = '', variant, rounded, ...props }, ref) => {
		return (
			<label htmlFor={props.id} className={wrapperStyle}>
				<input ref={ref} className={cm(inputClasses({ variant, rounded }))} {...props} />
				{children}
			</label>
		);
	}
);

Input.displayName = 'Input';
