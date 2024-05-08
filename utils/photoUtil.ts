export const setInputEvent = ({ MAX, callback }: setInputPropsType) => {
	const hiddenInput: HTMLInputElement = document.createElement('input')
	hiddenInput.accept = 'image/jpeg, image/jpg, image/png'
	hiddenInput.setAttribute('type', 'file')
	hiddenInput.setAttribute('name', 'uploadInput')
	hiddenInput.setAttribute('multiple', 'true')
	hiddenInput.addEventListener('change', async () => {
		// @ts-ignore
		const files = Array.from(hiddenInput.files)
		while (files.length > MAX) {
			files.pop()
		}
		// @ts-ignore
		const resizedImg = await resizeImage(files)
		callback([...resizedImg])
	})
	hiddenInput.click()
}

interface setInputPropsType {
	callback: Function
	MAX: number
}

type CheckFilesParam = {
	files: FileList
	maxLength: number
	allowFileType?: string[]
}
type CheckFilesResult = {
	list: File[]
	msg: string
	isLengthOver: boolean
	hasNoneAllowType: boolean
	isSizeOver: boolean
}

export const checkFile = ({
	file,
	allowFileType = ['image/jpeg', 'image/jpg', 'image/png'],
}: {
	file: File
	allowFileType: string[]
}): resultType => {
	const MAX_SIZE = 1024 * 1024 * 10

	const result: resultType = {
		msg: '',
		isError: false,
		isLengthOver: false,
		hasNoneAllowType: false,
		isSizeOver: false,
	}
	// 용량 체크
	if (file.size > MAX_SIZE) {
		result.isError = true
		result.isSizeOver = true
	}
	if (result.isSizeOver) result.msg = '10MB 이하의 사진만 등록할 수 있습니다.'

	// 파일 타입 체크
	const extensionArr = allowFileType.map((v) => v.split('/')[1])
	const fileNameCheck = (fileName: string) => {
		const fileNameArr = fileName.split('.')
		const fileExtension = fileNameArr[fileNameArr.length - 1]
		if (extensionArr.includes(fileExtension)) {
			return true
		} else {
			return false
		}
	}
	if (allowFileType.includes(file.type) && fileNameCheck(file.name)) {
	} else {
		result.isError = true
		result.hasNoneAllowType = true
	}
	if (result.hasNoneAllowType) result.msg = '이미지 타입의 사진만 등록할 수 있습니다.'

	return result
}

type resultType = {
	msg: string
	isError: boolean
	isLengthOver: boolean
	hasNoneAllowType: boolean
	isSizeOver: boolean
}

export const checkFiles = ({
	files,
	maxLength,
	allowFileType = ['image/jpeg', 'image/jpg', 'image/png'],
}: CheckFilesParam) => {
	let fileArray = Array.from(files)
	const MAX_SIZE = 1024 * 1024 * 10
	const extensionArr = allowFileType.map((v) => v.split('/')[1])
	const result: CheckFilesResult = {
		list: [],
		msg: '',
		isLengthOver: false,
		hasNoneAllowType: false,
		isSizeOver: false,
	}

	const fileNameCheck = (fileName: string) => {
		const fileNameArr = fileName.split('.')
		const fileExtension = fileNameArr[fileNameArr.length - 1]
		if (extensionArr.includes(fileExtension)) {
			return true
		} else {
			return false
		}
	}

	// 길이 체크
	while (fileArray.length > maxLength) {
		fileArray.pop()
		result.isLengthOver = true
	}

	// 타입 체크
	fileArray = fileArray.filter((file) => {
		if (allowFileType.includes(file.type) && fileNameCheck(file.name)) {
			return true
		} else {
			result.hasNoneAllowType = true
			return false
		}
	})

	// 용량 체크
	fileArray = fileArray.filter((v) => {
		if (v.size > MAX_SIZE) {
			result.isSizeOver = true
			return false
		} else {
			return true
		}
	})

	result.list = fileArray

	if (result.isLengthOver) result.msg = `등록 개수를 초과하였습니다.`
	if (result.hasNoneAllowType) result.msg = 'JPG, JPEG, PNG 형식의 사진만 등록 가능합니다.'
	if (result.isSizeOver) result.msg = '10MB 이하의 사진만 등록할 수 있습니다.'

	return result
}

type CheckFileTypeProps = {
	list: File[]
	allowFileType?: string[]
}

type CheckFileTypeReturnType = {
	list: File[]
	hasNoneAllowType: boolean
	msg: string
}

export const checkFileType = ({
	list,
	allowFileType = ['image/jpeg', 'image/jpg', 'image/png'],
}: CheckFileTypeProps) => {
	const result: CheckFileTypeReturnType = {
		list: [],
		hasNoneAllowType: false,
		msg: '',
	}

	const resultList = list.filter((file) => {
		if (allowFileType.includes(file.type)) {
			return true
		} else {
			result.hasNoneAllowType = true
			return false
		}
	})

	result.list = resultList
	if (result.hasNoneAllowType) result.msg = 'JPG, JPEG, PNG 형식의 사진만 등록 가능합니다.'

	return result
}
