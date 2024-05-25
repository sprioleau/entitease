"use client";

import useToast from "@/hooks/useToast";
import composeClasses from "@/utils/composeClasses";

type Props = {
	tag: keyof JSX.IntrinsicElements;
	label: string;
	className?: string;
	addClass?: string;
	textToCopy?: string;
	isBlank?: boolean;
};

export default function LabelWithCopy({ label, tag, className = "", addClass = "", textToCopy, isBlank }: Props) {
	const { toast } = useToast();

	function handleCopy() {
		if (!textToCopy) return;
		navigator.clipboard.writeText(textToCopy);
		toast(`Copied ${textToCopy}`);
	}

	const CustomTag: keyof JSX.IntrinsicElements = `${tag}`;

	return (
		<CustomTag
			className={composeClasses({
				[className]: Boolean(className),
				[addClass]: Boolean(addClass),
				copy: Boolean(textToCopy),
				isBlank: Boolean(isBlank),
			})}
			onClick={handleCopy}
		>
			{label}
		</CustomTag>
	);
}
