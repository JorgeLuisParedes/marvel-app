import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	moduleNameMapper: {
		'^store/(.*)$': '<rootDir>/src/store/$1',
		'^hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^components/(.*)$': '<rootDir>/src/components/$1',
		'^pages/(.*)$': '<rootDir>/src/pages/$1',
		'^router/(.*)$': '<rootDir>/src/router/$1',
		'^types/(.*)$': '<rootDir>/src/types/$1',
		'^api/(.*)$': '<rootDir>/src/api/$1',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	testMatch: ['<rootDir>/src/**/*.(test|spec).(ts|tsx)'],
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: './tsconfig.jest.json',
			},
		],
	},
};

export default config;
