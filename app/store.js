const checkGroups = () => sessionStorage.groups || (sessionStorage.groups = JSON.stringify([]));
const setGroups = groups => (checkGroups(), sessionStorage.groups = JSON.stringify(groups));
export const getGroupsInStore = () => (checkGroups(), JSON.parse(sessionStorage.groups));

export const getGroupInStore = name => {
	const groups = getGroupsInStore();
	return groups.length !== 0
		? groups.find(group => group.title === name)
		: null;
};

export const appendGroupInStore = group => {
	const groups = getGroupsInStore();
	groups.push(group);
	return setGroups(groups);
};
